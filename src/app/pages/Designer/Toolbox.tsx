import React, {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import JsonSchemaService from '../../../utils/api/designer/json-schema.service'
import IconClear from '../../images/clear-white.png'
import IconSave from '../../images/save-white.png'
import IconView from '../../images/view.png'
import {getAuth, useAuth} from '../../modules/auth'
import {useAppendSchema, useStore} from './model'
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
  const [standardTypes, setStandardTypes] = useState<Array<any>>([])
  const [actusTypes, setActusTypes] = useState<Array<any>>([])
  const [storageTypes, setStorageTypes] = useState<Array<any>>([])
  const [supplyChainTypes, setSupplyChainTypes] = useState<Array<any>>([])
  const [listCategory, setListCategory] = useState([])
  const [listFavorite, setListFavorite] = useState<Array<any>>([])
  const [isLoadFavorite, setIsLoadFavorite] = useState(true)
  const [selectProperty, setSelectProperty] = useState('standard')

  const favoriteActive = (item) => {
    return listFavorite?.length && listFavorite?.some((i) => i?.property?.id === item?.id)
  }

  const saveSchema = useCallback(() => {
    const username = currentUser?.username || ''
    JsonSchemaService.createSchema(JSON.stringify(store), username).then((x) => {
      const r = JSON.parse(x.document)[0]
      appendSchemaHook({id: x.id, name: r.name, updateAt: x.updateAt})
    })
  }, [store])

  const onDragStart = useCallback((ev: React.DragEvent<HTMLDivElement>) => {
    let item: any = ev.currentTarget.dataset.item
    // change name properties Storage
    if (typeof item === "string") {
      item = JSON.parse(item)
    }
    item.name = setTypeNameStorage(item?.name).name
    item.from = 'propertie'
    ev.dataTransfer.setData('item', JSON.stringify(item))
  }, [])

  const handleAddFavorite = async (e, item) => {
    e.stopPropagation()
    try {
      let tmpListFavorite = JSON.parse(JSON.stringify(listFavorite))
      if (tmpListFavorite && !favoriteActive(item)) {
        await JsonSchemaService.addFavourite(item?.id, auth?.username)
        setIsLoadFavorite((preState) => !preState)
      } else {
        handleRemoveFavorite(item)
      }
    } catch (error) {
      console.error({error})
    }
  }

  const handleRemoveFavorite = async (item) => {
    try {
      let tmpListFavorite = JSON.parse(JSON.stringify(listFavorite))
      if (tmpListFavorite?.length) {
        await JsonSchemaService.removeFavourite(item?.id, auth?.username)
        setIsLoadFavorite((preState) => !preState)
      }
    } catch (error) {
      console.error({error})
    }
  }

  const setTypeNameStorage = (name) => {
    switch (name?.toLowerCase()) {
      case 'image url':
        return {
          type: 'storageImageURL',
          name: 'myVideo',
        }
      case 'text':
        return {
          type: 'storageText',
          name: 'myMetadata',
        }
      default:
        return {
          type: name,
          name: name,
        }
    }
  }

  const handleConvertDataProperties = (data) => {
    if (data && data?.length > 0) {
      let actusTypes = []
      let standardTypes = []
      let storageTypes = []
      let supplyChainTypes = []
      data?.forEach((item) => {
        // convert type Storage
        if (item?.category?.name === 'Storage') {
          item.type = setTypeNameStorage(item?.name)?.type
        } else item.type = item?.name || ''
        // set Type Properties
        if (item?.category?.name === 'Standard') {
          standardTypes.push(item)
        } else if (item?.category?.name === 'ACTUS') {
          actusTypes.push(item)
        } else if (item?.category?.name === 'Supply Chain') {
          supplyChainTypes.push(item)
        } else {
          storageTypes.push(item)
        }
      })
      setActusTypes(actusTypes)
      setStandardTypes(standardTypes)
      setStorageTypes(storageTypes)
      setSupplyChainTypes(supplyChainTypes)
    }
  }

  const fetchListCategory = async () => {
    try {
      const reps = await JsonSchemaService.getAllCategory()
      setListCategory(reps || [])
    } catch (error) {
      console.error({error})
    }
  }

  const fetchListProperties = async () => {
    try {
      const reps = await JsonSchemaService.getAllProperty()
      reps && handleConvertDataProperties(reps)
    } catch (error) {
      console.error({error})
    }
  }

  const fetchListFavourite = async () => {
    try {
      let reps = await JsonSchemaService.getAllFavourite(auth?.username)
      if (reps) {
        // Set type properties
        reps.forEach((i, idx) => {
          reps[idx].property = {
            ...reps?.[idx]?.property,
            type: reps?.[idx]?.property?.name,
          }
        })
        setListFavorite(reps || [])
      }
    } catch (error) {
      console.error({error})
    }
  }

  const ArrayProperties = (type) => {
    if (!type) {
      return {
        name: 'Category',
        data: [],
      }
    }
    switch (type?.toLowerCase()) {
      case 'standard':
        return {
          name: 'Standard',
          data: standardTypes,
        }
      case 'actus':
        return {
          name: 'ACTUS',
          data: actusTypes,
        }
      case 'storage':
        return {
          name: 'Storage',
          data: storageTypes,
        }
      case 'supply chain':
        return {
          name: 'Supply Chain',
          data: supplyChainTypes,
        }
      default:
        return {
          name: 'Standard',
          data: standardTypes,
        }
    }
  }

  useEffect(() => {
    fetchListCategory()
    fetchListProperties()
  }, [])

  useEffect(() => {
    fetchListFavourite()
  }, [isLoadFavorite])

  return (
    <StyledGroupToolbox>
      <GroupItem>
        <div>
          <button
            data-kt-menu-trigger='hover'
            data-kt-menu-placement='bottom-start'
            data-kt-menu-flip='top-end'
            className='btn btn-sm fw-bold btn-bg-light btn-color-gray-700 btn-active-color-primary d-flex align-items-center'
          >
            <Name>
              {listCategory?.length > 0 ? ArrayProperties(selectProperty)?.name : 'Categories'}
            </Name>{' '}
            <IconDrop className='fa-solid fa-caret-down'></IconDrop>
          </button>
          <div
            className='menu menu-sub menu-sub-dropdown w-250px w-md-150px p-4'
            data-kt-menu='true'
          >
            <div className='d-flex flex-column'>
              {listCategory?.length > 0 ? (
                <>
                  {listCategory?.map((item, index) => {
                    return (
                      <NameDropdow onClick={() => setSelectProperty(item?.name?.toLowerCase())}>
                        {item?.name}
                      </NameDropdow>
                    )
                  })}
                </>
              ) : (
                <div>There are currently no categories</div>
              )}
            </div>
          </div>
        </div>
        <div className='mt-3'>
          {listCategory?.length > 0 && ArrayProperties(selectProperty)?.data?.map((t) => (
            <Item draggable onDragStart={onDragStart} data-item={JSON.stringify(t)} key={t.id}>
              <IconStar
                onClick={(e) => handleAddFavorite(e, t)}
                className={`fa-star ${favoriteActive(t) ? 'fa-solid text-primary' : 'fa-regular'}`}
              ></IconStar>
              {t.name}
            </Item>
          ))}
        </div>

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
            ArrayProperties={ArrayProperties}
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
  margin-top: 10px;
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

const GroupFavorite = styled.div`
  border-bottom: 1px dashed #ccc;
  padding-bottom: 15px;
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

const Name = styled.div`
  min-width: 100px;
  display: flex;
`

const NameDropdow = styled.div`
  padding: 5px;
  min-width: 100px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    color: #fff;
    background-color: #009ef7;
    transition: all 0.2s ease;
  }
`
