import React, { useCallback } from 'react';
import styled from 'styled-components';
import JsonSchemaService from '../../../utils/services/json-schema.service';
import JsonSchemaList from './JsonSchemaList';
import JsonSchemaView from './JsonSchemaView';
import { ItemTypes, useAppendSchema, useStore } from './model';
import IconSave from '../../images/save-white.png'
import IconClear from '../../images/clear-white.png'
import IconView from '../../images/view.png'

export interface ToolboxProps {
  clear: () => void
  setStore: (store: any) => void
  setSchemaList: (list: any) => void
  appendSchema: (schema: any) => void
  setShowModal: (showModal: boolean) => void
}

const Toolbox: React.FC<ToolboxProps> = ({clear, setStore, setSchemaList, setShowModal}) => {
  const store = useStore()

  const appendSchemaHook = useAppendSchema()

  const saveSchema = useCallback(() => {
    JsonSchemaService.createSchema(JSON.stringify(store)).then((x) => {
      const r = JSON.parse(x.document)[0]
      appendSchemaHook({id: x.id, name: r.name})
    })
  }, [store])

  const onDragStart = useCallback((ev: React.DragEvent<HTMLDivElement>) => {
    console.log('Data', ev.currentTarget.dataset)
    const item = ev.currentTarget.dataset.item as string
    ev.dataTransfer.setData('item', item)
  }, [])

  return (
    <StyledGroupToolbox>
      <GroupItem>
        {ItemTypes.map((t) => (
          <Item draggable onDragStart={onDragStart} data-item={JSON.stringify(t)} key={t.name}>
            {t.name}
          </Item>
        ))}

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
      <JsonSchemaView />
      <JsonSchemaList setStore={setStore} setSchemaList={setSchemaList} />
    </StyledGroupToolbox>
  )
}

export default Toolbox;

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
  padding-bottom: 10px;
`

const Item = styled.div`
  padding: 5px 10px;
  border-radius: 0.425rem;
  cursor: move;
  &:hover {
    color: #fff;
    background-color: #009ef7;
    transition: all 0.2s ease;
  }
`;

const GroupBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

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
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
