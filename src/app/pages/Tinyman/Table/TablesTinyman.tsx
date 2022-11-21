/* eslint-disable jsx-a11y/anchor-is-valid */
import BigNumber from 'bignumber.js'
import React, { useCallback, useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { ThreeDots } from 'react-loader-spinner'
import styled from 'styled-components'
import { dataReactApexChart } from '../../../../constants/chart'
import { getDataChartTVL, getListDefi } from '../../../../utils/api/defi'
import { showNumberFormat, showThreeDecimalPlaces } from '../../../../_metronic/helpers/format/number'
import { Loading } from '../../../components/Loading'
import Pagination from '../../../components/Pagination'
import ICSort, { sortRows } from '../../../components/Sort'
import useSearch from '../../../hooks/useSearch'

type Props = {
  className: string
}

const TablesTinyman: React.FC<Props> = ({className}) => {
  const [listTinyman, setListTinyman] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listTinyman, [])
  const [isLoading, setIsLoading] = useState(false)
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

  const fetchDataChartTVL = async (id) => {
    setIsLoadingChart(true)
    try {
      const params = {
        defi_protocol_id: 2, // tiny
        blockchain_id: id,
      }
      const reps = await getDataChartTVL(params)
      if (reps?.data && reps?.data?.length > 0) {
        const data = {...dataReactApexChart}
        data.series[0].data = reps?.data?.map((item) => item?.tvl)
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
              className={idChartTVL === item?.liquidity_asset?.id ? 'show_chart' : ''}
              key={index}
              onClick={() => handleShowChartTVL(item?.liquidity_asset?.id)}
            >
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>
                      {item?.asset_1?.unit_name}/{item?.asset_2?.unit_name}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start'>
                    <span className='text-dark fw-bold fs-7' style={{minWidth: '85px'}}>
                      {item?.share}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='d-flex justify-content-start flex-column'>
                    <span className='text-dark fw-bold fs-7'>
                      $
                      {showNumberFormat(
                        new BigNumber(showThreeDecimalPlaces(item?.liquidity_in_usd))
                      )}
                    </span>
                  </div>
                </div>
              </td>
            </TrTable>
            {idChartTVL === item?.liquidity_asset?.id && (
              <tr
                style={{
                  backgroundColor: 'rgba(243, 243, 243, 0.3)',
                }}
              >
                <td colSpan={3} className='text-left'>
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
                      {dataChart ? (
                        <ReactApexChart
                          options={dataChart.options}
                          series={dataChart.series}
                          type='area'
                          height={350}
                        />
                      ) : (
                        <h5 className='mt-4 d-flex justify-content-center'>
                          Retrieving chart data error occurred, please try again!
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
    [results, searched, sort, idChartTVL, isLoadingChart]
  )

  const getListTinyman = async () => {
    setIsLoading(true)
    try {
      const params = {
        platform: 'tinyman',
      }
      const reps = await getListDefi(params)
      reps?.data && setListTinyman(reps?.data)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getListTinyman()
    return () => {
      setIdChartTVL(null)
    }
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
                    onClick={() => !isLoading && handleSort('asset_1.unit_name')}
                  >
                    Pair{' '}
                    <ICSort
                      type={sort.sort_name === 'asset_1.unit_name' ? sort.sort_type : 'default'}
                    />
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('share')}
                  >
                    % Share{' '}
                    <ICSort type={sort.sort_name === 'share' ? sort.sort_type : 'default'} />
                  </span>
                </th>
                <th>
                  <span
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('liquidity_in_usd')}
                  >
                    TVL{' '}
                    <ICSort
                      type={sort.sort_name === 'liquidity_in_usd' ? sort.sort_type : 'default'}
                    />
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
                  <td colSpan={3} className='text-left'>
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

export { TablesTinyman }

const TrTable = styled.tr`
  &:hover {
    background-color: ${(props) =>
      props.className === 'show_chart' ? 'rgba(243, 243, 243, 0.3)' : 'rgba(230, 246, 255, 0.5)'};
  };
  cursor: pointer;
  background-color: ${(props) =>
    props.className === 'show_chart' ? 'rgba(243, 243, 243, 0.3)' : 'unset'};
  border-bottom-color: ${(props) =>
    props.className === 'show_chart' ? 'transparent !important' : '#E4E6EF'};
`