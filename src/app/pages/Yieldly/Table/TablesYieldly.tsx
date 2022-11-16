/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import {getInfoPoolV2, getInfoPoolV3, getListDefi, getTokenPrice} from '../../../../utils/api/defi'
import {Loading} from '../../../components/Loading'
import Pagination from '../../../components/Pagination'
import useSearch from '../../../hooks/useSearch'
import ICSort, {sortRows} from '../../../components/Sort'
import {ThreeDots} from 'react-loader-spinner'
import { showNumberFormat } from '../../../../_metronic/helpers/format/number'
import BigNumber from 'bignumber.js'

type Props = {
  className: string
}

const TablesYieldly: React.FC<Props> = ({className}) => {
  const [listDeFi, setListDeFi] = useState<Array<any>>([])
  const {searched, setSearch, results} = useSearch(listDeFi, [])
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingTvl, setIsLoadingTvl] = useState(true)
  const [paginate, setPaginate] = useState(null)

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

  const renderList = useCallback(
    () =>
      Array.isArray(filterListResults(results, page)) &&
      filterListResults(results, page)?.map((item, index) => {
        return (
          <tr key={index}>
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
                  {isLoadingTvl ? (
                    <ThreeDots
                      height='22'
                      width='22'
                      color='#009ef7'
                      ariaLabel='three-dots-loading'
                    />
                  ) : (
                    <span className='text-dark fw-bold fs-7'>${showNumberFormat(item?.tvl)}</span>
                  )}
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
          </tr>
        )
      }),
    [results, searched, sort]
  )

  const getTVL = async (data) => {
    setIsLoadingTvl(true)
    if (data?.length < 1) return
    let tmpListDeFi = [...data]
    try {
      for (let i in tmpListDeFi) {
        const [v2, v3] = await Promise.all([
          getInfoPoolV2(tmpListDeFi[i]?.Id),
          getInfoPoolV3(tmpListDeFi[i]?.Id),
        ])
        if (v3?.data?.tvl) tmpListDeFi[i].tvl = Math.trunc(v3?.data?.tvlUSD)
        else {
          let price = await getTokenPrice(tmpListDeFi?.[i]?.StakingToken?.TokenName?.toLowerCase())
          price = price?.data?.price
          const idx = v2?.data?.application?.params?.['global-state']?.findIndex(
            (item: any) => item?.key === 'R0E='
          )
          const uint = new BigNumber(
            v2?.data?.application?.params?.['global-state']?.[idx]?.value?.uint
          )
          tmpListDeFi[i].tvl = parseInt(uint.multipliedBy(price).toString())
        }
      }
      setListDeFi(tmpListDeFi)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoadingTvl(false)
    }
  }

  const getListDeFi = async () => {
    setIsLoading(true)
    try {
      const reps = await getListDefi()
      if (reps?.data) {
        setListDeFi(reps?.data)
        getTVL(reps?.data)
      }
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getListDeFi()
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

export {TablesYieldly}
