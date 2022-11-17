/* eslint-disable jsx-a11y/anchor-is-valid */
import BigNumber from 'bignumber.js'
import React, { useCallback, useEffect, useState } from 'react'
import { getListDefi } from '../../../../utils/api/defi'
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

  const renderList = useCallback(
    () =>
      Array.isArray(filterListResults(results, page)) &&
      filterListResults(results, page)?.map((item, index) => {
        return (
          <tr key={index}>
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
                  <span
                    className='text-dark fw-bold fs-7'
                    style={{minWidth: '85px'}}
                  >
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
          </tr>
        )
      }),
    [results, searched, sort]
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
                  <span className='cursor-pointer' onClick={() => !isLoading && handleSort('liquidity_in_usd')}>
                    TVL <ICSort type={sort.sort_name === 'liquidity_in_usd' ? sort.sort_type : 'default'} />
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

