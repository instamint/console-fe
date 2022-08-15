import React, {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSchemaList} from '../model'
import JsonSchemaService from '../../../../utils/api/designer/json-schema.service'
import IconDelete from '../../../images/delete.png'
import {useAuth} from '../../../modules/auth'
import {convertTimeZone} from '../../../../_metronic/helpers/format/datetime'
import {Loading} from '../../../components/Loading'

interface JsonSchemaListProps {
  setStore: (store: any) => void
  setSchemaList: (list: any[]) => void
}

const JsonSchemaList: React.FC<JsonSchemaListProps> = (props) => {
  const {setStore, setSchemaList} = props
  const schemaList = useSchemaList()
  const {currentUser} = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const username = currentUser?.username || ''
    JsonSchemaService.getAllSchemas(username).then((schemas) => {
      const schemaList = schemas.map((x) => {
        const s = JSON.parse(x.document)
        try {
          const r = s.filter((xx: any) => xx.id === 'root')[0]
          return {
            id: x.id,
            name: r.name,
            updateAt: x.updateAt,
          }
        } catch (e) {
          return {
            id: x.id,
            name: 'root',
          }
        }
      })
      setIsLoading(false)
      setSchemaList(schemaList.filter((x) => x.name !== 'root'))
    })
  }, [])

  const loadSchema = (x: any): void => {
    JsonSchemaService.getSchema(x.id).then((schema) => {
      setStore(JSON.parse(schema.document))
    })
  }

  const deleteSchema = (e: any, x: any): void => {
    e.stopPropagation()
    JsonSchemaService.deleteSchema(x.id).then(() => {
      setSchemaList(schemaList.filter((xx) => xx.id !== x.id))
    })
  }

  const renderList = useCallback(
    () =>
      schemaList?.length > 0 && schemaList?.map((x, i) => {
        return (
          <tr key={i}>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fs-7'>{i + 1}</span>
                </div>
              </div>
            </td>
            <td onClick={() => loadSchema(x)}>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <Name className='text-dark fs-7'>{x?.name}</Name>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <span className='text-dark fs-7'>{convertTimeZone(x?.updateAt)}</span>
                </div>
              </div>
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <div className='d-flex justify-content-start flex-column'>
                  <Button onClick={(e) => deleteSchema(e, x)} src={IconDelete} alt='edit'></Button>
                </div>
              </div>
            </td>
          </tr>
        )
      }),
    [schemaList]
  )

  return (
    <StyledJsonSchemaList>
      {schemaList?.length > 0 && <StyledJsonSchemaTitle>My Schema Library</StyledJsonSchemaTitle>}
      <div className='table-responsive'>
        {isLoading ? (
          <Loading />
        ) : (
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th>#</th>
                <th style={{minWidth: '120px'}}>NAME</th>
                <th>UPDATED DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {!isLoading && schemaList?.length > 0 ? (
                renderList()
              ) : (
                <tr>
                  <td colSpan={4} className='text-left'>
                    <span className='mt-5 d-flex justify-content-center'>
                      There is currently no data available
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
            {/* end::Table body */}
          </table>
        )}
      </div>
    </StyledJsonSchemaList>
  )
}

export default JsonSchemaList

const StyledJsonSchemaList = styled.div`
  padding: 8px;
`

const StyledJsonSchemaTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #009ef7;
  margin: 15px 0px;
`

const Name = styled.span`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`

const Button = styled.img`
  border: none;
  cursor: pointer;
  width: 17px;
  height: 17px;
  margin-left: 10px;
  margin-bottom: 3px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`
