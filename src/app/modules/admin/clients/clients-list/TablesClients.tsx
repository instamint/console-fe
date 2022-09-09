/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import {changeRevoked, getListClients} from '../../../../../utils/api/clients'
import FilterSearch from '../../../../components/FilterSearch'
import ICSort from '../../../../components/Sort'
import useSearch from '../../../../hooks/useSearch'
import {useAlert} from 'react-alert'
import { Loading } from '../../../../components/Loading'

type Props = {
  className: string
}

const TablesClients: React.FC<Props> = ({className}) => {
  const alert = useAlert()
  const [listClients, setListClients] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isWaitRevoked, setIsWaitRevoked] = useState(false)
  const [reloadList, setReloadList] = useState(false)
  const {searched, setSearch, results} = useSearch(listClients, ['name', 'namespace', 'username'])
  const [params, setParams] = useState({
    limit: '',
    sort_name: '',
    sort_type: '',
  })
  const [sort_name, set_sort_name] = useState('')
  const [sort_type, set_sort_type] = useState('')

  const fetchListClients = async (params) => {
    try {
      let reps = await getListClients(params)
      reps && setListClients(reps?.data?.content)
    } catch (error) {
      console.error({error})
    } finally {
      setIsLoading(false)
    }
  }

  const handleSort = (name) => {
    let sortTypeNow = sort_type === 'ASC' ? 'DESC' : 'ASC'
    if (sort_name !== name) {
      sortTypeNow = 'ASC'
    }
    setParams({
      ...params,
      sort_name: name,
      sort_type: sortTypeNow,
    })
    set_sort_name(name)
    set_sort_type(sortTypeNow)
  }

  const handleRevokeClient = async (id) => {
    setIsWaitRevoked(true)
    try {
      const reps = await changeRevoked(id)
      if (reps) {
        setReloadList((preState) => !preState)
        alert.success('Successful Revoke Client!')
      } 
    } catch (error) {
      console.error({error})
      alert.error('An error occurred, please try again!')
    } finally {
      setIsWaitRevoked(false)
    }
  }

  useEffect(() => {
    fetchListClients(params)
  }, [params, reloadList])

  const renderList = useCallback(
    () =>
      Array.isArray(listClients) &&
      listClients?.map((item, index) => {
        return (
          <tr key={index}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.namespace}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.name}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fw-bold fs-7'>{item?.userName}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                <span className='text-dark fw-bold fs-7 me-2'>Revoked</span>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  name='notifications'
                  checked={item?.revoked}
                  onChange={() => !isWaitRevoked && handleRevokeClient(item?.id)}
                />
              </div>
            </td>
          </tr>
        )
      }),
    [listClients]
  )

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Clients List</span>
        </h3>
        <FilterSearch setSearch={setSearch} />
      </div>
      <div className='card-body py-4'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('party.name')}
                  >
                    NAME SPACE <ICSort type={sort_name === 'party.name' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('party.namespace')}
                  >
                    NAME <ICSort type={sort_name === 'party.namespace' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th>
                  <SpanThTable
                    className='cursor-pointer'
                    onClick={() => !isLoading && handleSort('userName')}
                  >
                    USER NAME <ICSort type={sort_name === 'userName' ? sort_type : 'default'} />
                  </SpanThTable>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loading />
              ) : listClients?.length > 0 ? (
                renderList()
              ) : (
                <tr>
                  <td colSpan={3} className='text-center'>
                    <h4 className='mt-5 d-flex justify-content-center'>
                      There is currently no data available
                    </h4>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export {TablesClients}

const SpanThTable = styled.span`
  width: max-content;
  display: flex;
  align-items: center;
`
