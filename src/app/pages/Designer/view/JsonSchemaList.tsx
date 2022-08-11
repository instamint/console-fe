import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useSchemaList} from '../model'
import JsonSchemaService from '../../../../utils/api/designer/json-schema.service'
import IconDelete from '../../../images/delete.png'
import { useAuth } from '../../../modules/auth'
import { convertTimeZone } from '../../../../_metronic/helpers/format/datetime'

interface JsonSchemaListProps {
  setStore: (store: any) => void
  setSchemaList: (list: any[]) => void
}

const JsonSchemaList: React.FC<JsonSchemaListProps> = (props) => {
  const {setStore, setSchemaList} = props

  const schemaList = useSchemaList()
  const {currentUser} = useAuth()

  useEffect(() => {
    const username = currentUser?.username || ""
    JsonSchemaService.getAllSchemas(username).then((schemas) => {
      const schemaList = schemas.map((x) => {
        const s = JSON.parse(x.document)
        try {
          const r = s.filter((xx: any) => xx.id === 'root')[0]
          return {
            id: x.id,
            name: r.name,
          }
        } catch (e) {
          return {
            id: x.id,
            name: 'root',
          }
        }
      })
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

  return (
    <StyledJsonSchemaList>
      {schemaList?.length > 0 && (
        <StyledJsonSchemaTitle>The Json Schema is saved</StyledJsonSchemaTitle>
      )}
      <UlListJson>
        {schemaList.map((x, i) => (
          <StyledSchmaLabel key={x.id} onClick={() => loadSchema(x)}>
            <Name>
              {x?.name} <Time>({convertTimeZone(x?.updateAt || '2022-01-09T17:35:18.315Z')})</Time>
            </Name>
            <Button onClick={(e) => deleteSchema(e, x)} src={IconDelete} alt='edit'></Button>
          </StyledSchmaLabel>
        ))}
      </UlListJson>
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
const UlListJson = styled.ul`
  list-style-type: circle;
  padding-left: unset;
`

const StyledSchmaLabel = styled.li`
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Name = styled.span`
  display: flex;
  min-width: 262px;
`

const Time = styled.span`
  color: #737373;
  font-size: 12px;
  display: flex;
  min-width: 107px;
  margin-left: 5px;
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
