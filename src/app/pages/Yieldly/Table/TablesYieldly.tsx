/* eslint-disable jsx-a11y/anchor-is-valid */
import BigNumber from 'bignumber.js'
import React, { useCallback, useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { ThreeDots } from 'react-loader-spinner'
import styled from 'styled-components'
import { dataReactApexChart } from '../../../../constants/chart'
import {
  getDataChartTVL, getListDefi
} from '../../../../utils/api/defi'
import { showNumberFormat } from '../../../../_metronic/helpers/format/number'
import { Loading } from '../../../components/Loading'
import Pagination from '../../../components/Pagination'
import ICSort, { sortRows } from '../../../components/Sort'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const TablesYieldly: React.FC<Props> = ({className}) => {
  const [listDeFi, setListDeFi] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listDeFi, [])
  const [isLoading, setIsLoading] = useState(false)
  // const [isLoadingTvl, setIsLoadingTvl] = useState(true)
  const [isLoadingChart, setIsLoadingChart] = useState(true)
  const [paginate, setPaginate] = useState(null)
  const [idChartTVL, setIdChartTVL] = useState(null)
  const [dataChart, setDataChart] = useState(null)

  const [sort, setSort] = useState({sort_type: '', sort_name: ''})
  const [page, setPage] = useState<string | number>(1)

  const filterListResults = (results, page) => {
    let newList = [...results]
    if (sort?.sort_name !== '' && sort?.sort_type !== '') {
      newList = sortRows(newList, sort)
    }
    return newList
  }

  const handleSort = (name) => {
    let sortTypeNow = sort.sort_type === 'ASC' ? 'DESC' : 'ASC'
    if (sort.sort_name !== name) {
      sortTypeNow = 'ASC'
    }
    setPage(1) //return the page to 1 when sorting
    setSort({
      sort_name: name,
      sort_type: sortTypeNow,
    })
  }

  const handleSetChain = (data) => {
    let chain
    if (data?.Type === 'LIQUIDITY') {
      chain = data?.StakingToken?.TokenTicker || ''
    } else {
      chain = `${data?.StakingToken?.TokenTicker}/${data?.RewardToken?.[0]?.TokenTicker}`
    }
    return chain
  }

  const fetchDataChartTVL = async (id) => {
    setIsLoadingChart(true)
    try {
      const params = {
        defi_protocol_id: 1, //yieldly
        blockchain_id: id,
      }
      const reps = await getDataChartTVL(params)
      if (reps?.data) {
        const data = {...dataReactApexChart}
        data.series[0].data = reps?.data?.map((item) => {
          let number: any = new BigNumber(item?.tvl)
          number = number.toFixed(0)
          return number
        })
        data.options.xaxis.categories = reps?.data?.map((item) => item?.snapshotTime)
        setDataChart(data)
      }
    } catch (error) {
      console.error({error})
      setDataChart(null)
    } finally {
      setIsLoadingChart(false)
    }
  }

  const handleShowChartTVL = (id) => {
    if (!idChartTVL || idChartTVL !== id || idChartTVL === null) {
      setIdChartTVL(id)
      fetchDataChartTVL(id)
    } else setIdChartTVL(null)
  }

  const renderList = useCallback(
    () =>
      Array.isArray(filterListResults(results, page)) &&
      filterListResults(results, page)?.map((item, index) => {
        return (
          <>
            <TrTable
              className={idChartTVL === item?.Id ? 'show_chart' : ''}
              key={index}
              onClick={() => handleShowChartTVL(item?.Id)}
            >
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>{handleSetChain(item)}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start'>
                    <span
                      className='text-dark fw-bold fs-7'
                      data-tip={item?.Id}
                      style={{minWidth: '85px'}}
                    >
                      {item?.Id}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>
                      ${item?.tvl ? showNumberFormat(Math.trunc(item?.tvl)) : 0}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>{item?.Type || 'STAKING'}</span>
                  </div>
                </div>
              </td>
            </TrTable>
            {idChartTVL === item?.Id && (
              <tr
                style={{
                  backgroundColor: 'rgba(243, 243, 243, 0.3)',
                }}
              >
                <td colSpan={4} className='text-left'>
                  {isLoadingChart ? (
                    <div className='d-flex justify-content-center align-items-center'>
                      <ThreeDots
                        height='30'
                        width='35'
                        color='#009ef7'
                        ariaLabel='three-dots-loading'
                      />
                    </div>
                  ) : (
                    <>
                      {dataChart && dataChart?.series?.[0]?.data.length > 0 ? (
                        <ReactApexChart
                          options={dataChart.options}
                          series={dataChart.series}
                          type='area'
                          height={350}
                        />
                      ) : (
                        <h5 className='mt-4 d-flex justify-content-center'>
                          {dataChart?.series?.[0]?.data.length === 0
                            ? 'There is currently no data available'
                            : 'Retrieving chart data error occurred, please try again!'}
                        </h5>
                      )}
                    </>
                  )}
                </td>
              </tr>
            )}
          </>
        )
      }),
    [results, searched, sort, idChartTVL, isLoadingChart, dataChart]
  )

  // const getTVL = async (data) => {
  //   setIsLoadingTvl(true)
  //   if (data?.length < 1) return
  //   let tmpListDeFi = [...data]
  //   try {
  //     for (let i in tmpListDeFi) {
  //       const [v2, v3] = await Promise.all([
  //         getInfoPoolV2(tmpListDeFi[i]?.Id),
  //         getInfoPoolV3(tmpListDeFi[i]?.Id),
  //       ])
  //       if (v3?.data?.tvl) tmpListDeFi[i].tvl = Math.trunc(v3?.data?.tvlUSD)
  //       else {
  //         let price = await getTokenPrice(tmpListDeFi?.[i]?.StakingToken?.TokenName?.toLowerCase())
  //         price = price?.data?.price
  //         const idx = v2?.data?.application?.params?.['global-state']?.findIndex(
  //           (item: any) => item?.key === 'R0E='
  //         )
  //         const uint = new BigNumber(
  //           v2?.data?.application?.params?.['global-state']?.[idx]?.value?.uint
  //         )
  //         tmpListDeFi[i].tvl = parseFloat(uint.multipliedBy(price).toString())
  //       }
  //     }
  //     setListDeFi(tmpListDeFi)
  //   } catch (error) {
  //     console.error({error})
  //   } finally {
  //     setIsLoadingTvl(false)
  //   }
  // }

  const getListDeFi = async () => {
    setIsLoading(true)
    try {
      const platform = 'yieldly'
      const reps = await getListDefi(platform)
      if (reps?.data) {
        setListDeFi(reps?.data)
        // getTVL(reps?.data)
      }
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getListDeFi()
    return(() => {
      setIdChartTVL(null)
    })
  }, [])

  return (
    <div className={`card ${className}`}>
      <div className='card-body py-4'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('StakingToken.TokenTicker')}
                  >
                    Pair{' '}
                    <ICSort
                      type={
                        sort.sort_name === 'StakingToken.TokenTicker' ? sort.sort_type : 'default'
                      }
                    />
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('Contracts.Escrow')}
                  >
                    Pool Address{' '}
                    <ICSort
                      type={sort.sort_name === 'Contracts.Escrow' ? sort.sort_type : 'default'}
                    />
                  </span>
                </th>
                <th>
                  <span className='cursor-pointer' onClick={() => !isLoading && handleSort('tvl')}>
                    TVL <ICSort type={sort.sort_name === 'tvl' ? sort.sort_type : 'default'} />
                  </span>
                </th>
                <th>
                  <span className='cursor-pointer' onClick={() => !isLoading && handleSort('Type')}>
                    Type <ICSort type={sort.sort_name === 'Type' ? sort.sort_type : 'default'} />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loading />
              ) : filterListResults(results, page)?.length > 0 ? (
                renderList()
              ) : (
                <tr>
                  <td colSpan={4} className='text-left'>
                    <h4 className='mt-5 d-flex justify-content-center'>
                      There is currently no data available
                    </h4>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {paginate?.total_page > 0 && (
          <div className='card-footer-v2'>
            <Pagination setIsLoading={setIsLoading} paginate={paginate} setPage={setPage} />
          </div>
        )}
      </div>
    </div>
  )
}

export { TablesYieldly }

const TrTable = styled.tr`
  &:hover {
    background-color: ${(props) =>
      props.className === 'show_chart' ? 'rgba(243, 243, 243, 0.3)' : 'rgba(230, 246, 255, 0.5)'};
  }
  cursor: pointer;
  background-color: ${(props) =>
    props.className === 'show_chart' ? 'rgba(243, 243, 243, 0.3)' : 'unset'};
  border-bottom-color: ${(props) =>
    props.className === 'show_chart' ? 'transparent !important' : '#E4E6EF'};
`
