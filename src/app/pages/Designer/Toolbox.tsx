import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import JsonSchemaService from '../../../utils/api/designer/json-schema.service'
import IconClear from '../../images/clear-white.png'
import IconSave from '../../images/save-white.png'
import IconView from '../../images/view.png'
import { getAuth, setAuth, useAuth } from '../../modules/auth'
import { ActusTypes, StandardTypes, useAppendSchema, useStore } from './model'
import Favorite from './view/Favorite'
import JsonSchemaList from './view/JsonSchemaList'

export interface ToolboxProps {
  clear: () => void
  setStore: (store: any) => void
  setSchemaList: (list: any) => void
  appendSchema: (schema: any) => void
  setShowModal: (showModal: boolean) => void
}

const Toolbox: React.FC<ToolboxProps> = ({clear, setStore, setSchemaList, setShowModal}) => {
  const store = useStore()
  const {currentUser} = useAuth()
  const appendSchemaHook = useAppendSchema()
  const auth = getAuth()
  const [standardTypes, setStandardTypes] = useState<Array<any>>(StandardTypes || [])
  const [actusTypes, setActusTypes] = useState<Array<any>>(ActusTypes || [])
  const [listProperty, setListProperty] = useState<Array<any>>([])
  const [listFavorite, setListFavorite] = useState<Array<any>>([])
  const [isLoadFavorite, setIsLoadFavorite] = useState(true)

  const favoriteActive = (item) => {
    return listFavorite?.length && listFavorite?.some((i) => i?.name === item?.name)
  }

  const saveSchema = useCallback(() => {
    const username = currentUser?.username || ''
    JsonSchemaService.createSchema(JSON.stringify(store), username).then((x) => {
      const r = JSON.parse(x.document)[0]
      appendSchemaHook({id: x.id, name: r.name})
    })
  }, [store])

  const onDragStart = useCallback((ev: React.DragEvent<HTMLDivElement>) => {
    const item = ev.currentTarget.dataset.item as string
    ev.dataTransfer.setData('item', item)
  }, [])

  const handleAddFavorite = (e, item) => {
    e.stopPropagation()
    let tmpAuth = JSON.parse(JSON.stringify(auth))
    if (tmpAuth?.favorite && !favoriteActive(item)) {
      tmpAuth.favorite.push(item)
    }
    setAuth(tmpAuth)
    setIsLoadFavorite((preState) => !preState)
  }

  const handleRemoveFavorite = (item) => {
    let tmpAuth = JSON.parse(JSON.stringify(auth))
    if (tmpAuth?.favorite?.length) {
      tmpAuth.favorite = tmpAuth?.favorite.filter((i: any) => i.name !== item.name)
    }
    setAuth(tmpAuth)
    setIsLoadFavorite((preState) => !preState)
  }

  const handleConvertDataProperties = (data) => {
    let actusTypes = []
    let standardTypes = []
    if (data && data?.length > 0) {
      data?.forEach((item) => {
        if (item?.category?.name === 'standard') {
          actusTypes.push(item)
        } else {
          standardTypes.push(item)
        }
      })
    }
    setActusTypes(actusTypes)
    setStandardTypes(standardTypes)
  }

  const fetchListProperties = async () => {
    try {
      const reps = await JsonSchemaService.getAllProperty()
      setListProperty(reps || [])
      handleConvertDataProperties(reps || [])
    } catch (error) {
      console.error({error})
    }
  }

  useEffect(() => {
    fetchListProperties()
  }, [])

  useEffect(() => {
    try {
      let tmpAuth = JSON.parse(JSON.stringify(auth))
      if (tmpAuth?.favorite) {
        setListFavorite(tmpAuth?.favorite)
      } else {
        tmpAuth.favorite = []
        setAuth(tmpAuth)
      }
    } catch (error) {
      console.error({error})
    }
  }, [isLoadFavorite])

  return (
    <StyledGroupToolbox>
      <GroupItem>
        <GroupDropDown>
          <DropStandard
            className='menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500'
            id='#kt_aside_menu_1'
            data-kt-menu='true'
          >
            <div data-kt-menu-trigger='click' className='menu-item'>
              <button className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary menu-link'>
                <NameDropdow>Standard</NameDropdow>{' '}
                <IconDrop className='fa-solid fa-caret-down'></IconDrop>
              </button>
              <div className='menu-sub menu-sub-accordion menu-active-bg'>
                {standardTypes.map((t) => (
                  <Item
                    draggable
                    onDragStart={onDragStart}
                    data-item={JSON.stringify(t)}
                    key={t.name}
                  >
                    <IconStar
                      onClick={(e) => !favoriteActive(t) && handleAddFavorite(e, t)}
                      className={`fa-star ${
                        favoriteActive(t) ? 'fa-solid text-primary' : 'fa-regular'
                      }`}
                    ></IconStar>
                    {t.name}
                  </Item>
                ))}
              </div>
            </div>
          </DropStandard>

          <div
            className='menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500'
            id='#kt_aside_menu_2'
            data-kt-menu='true'
          >
            <div data-kt-menu-trigger='click' className='menu-item'>
              <button className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary menu-link'>
                <NameDropdow>ACTUS</NameDropdow>{' '}
                <IconDrop className='fa-solid fa-caret-down'></IconDrop>
              </button>
              <div className='menu-sub menu-sub-accordion menu-active-bg'>
                {actusTypes.map((t) => (
                  <Item
                    draggable
                    onDragStart={onDragStart}
                    data-item={JSON.stringify(t)}
                    key={t.name}
                  >
                    <IconStar
                      onClick={(e) => !favoriteActive(t) && handleAddFavorite(e, t)}
                      className={`fa-star ${
                        favoriteActive(t) ? 'fa-solid text-primary' : 'fa-regular'
                      }`}
                    ></IconStar>
                    {t.name}
                  </Item>
                ))}
              </div>
            </div>
          </div>
        </GroupDropDown>

        <GroupBtn>
          <Button onClick={() => setShowModal(true)}>
            <Image src={IconView} alt='save'></Image>View Json
          </Button>
          <Button onClick={saveSchema}>
            <Image src={IconSave} alt='save'></Image>Save
          </Button>
          <Button onClick={clear}>
            <Image src={IconClear} alt='clear'></Image>Clear
          </Button>
        </GroupBtn>
      </GroupItem>

      {listFavorite?.length > 0 ? (
        <GroupFavorite>
          <Favorite
            listFavorite={listFavorite}
            handleRemoveFavorite={handleRemoveFavorite}
            onDragStart={onDragStart}
          />
        </GroupFavorite>
      ) : (
        ''
      )}

      <JsonSchemaList setStore={setStore} setSchemaList={setSchemaList} />
    </StyledGroupToolbox>
  )
}

export default Toolbox

const StyledGroupToolbox = styled.div`
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  border-color: #eff2f5;
  box-shadow: 0px 0px 20px 0px rgb(76 87 125 / 2%);
  overflow: auto;
  display: flex;
  flex-direction: column;
`

const GroupItem = styled.div`
  border-bottom: 1px dashed #ccc;
  padding-bottom: 15px;
`

const Item = styled.div`
  padding: 5px 10px;
  border-radius: 0.425rem;
  cursor: move;
  &:hover {
    font-weight: bold;
    color: #009ef7;
    transition: all 0.2s ease;
  }
`

const GroupBtn = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 5px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1em;
  margin: 0.5em;
  padding: 8px 14px;
  border-radius: 0.425rem;
  cursor: pointer;
  background-color: #009ef7;
  border: none;
  outline: none;
  &:hover {
    background-color: #0095e8;
  }
`

const GroupDropDown = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-left: 6.5px;
`
const GroupFavorite = styled.div`
  border-bottom: 1px dashed #ccc;
  padding-bottom: 15px;
`

const DropStandard = styled.div`
  margin-right: 30px;
  margin-bottom: 15px;
`

const Image = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`

const IconDrop = styled.i`
  margin-left: 5px;
  margin-bottom: 2px;
`

const IconStar = styled.i`
  margin-right: 7px;
  cursor: pointer;
  &:hover {
    color: #009ef7;
    font-size: 1.1rem;
  }
`
const NameDropdow = styled.div`
  min-width: 150px;
  display: flex;
`
