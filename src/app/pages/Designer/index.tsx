import React, { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Context, TreeStore, TreeNode } from './model';
import Toolbox from './Toolbox';
import TreeView from './view/TreeView';
import JsonView from './view/JsonView';
import { PageTitle } from '../../../_metronic/layout/core';
import { useIntl } from 'react-intl';
import {Modal} from 'react-bootstrap'
import { KTSVG } from '../../../_metronic/helpers';

const EditorPage: React.FC = () => {
  // --------------------------------------------------
  // treeStore
  // --------------------------------------------------
  const [treeStore, setTreeStore] = useState<TreeStore>([
    {
      id: 'root',
      category: {
        id: 'root',
        name: 'jsonSchema'
      },
      isEditing: false,
      name: 'Json Schema',
    },
  ])

  const clear = useCallback(() => {
    setTreeStore([
      {
        id: 'root',
        category: {
          id: 'root',
          name: 'jsonSchema'
        },
        isEditing: false,
        name: 'Json Schema',
      },
    ])
  }, [])

  const append = useCallback((node: TreeNode) => {
    console.debug('append', node)
    setTreeStore((x) => {
      const numOfChild = x.filter((y) => y.parent === node.parent).length
      node.orderId = numOfChild + 1
      node.name = `${node.name} (${numOfChild + 1})`
      return [...x, node]
    })
  }, [])

  const remove = useCallback(
    (node: TreeNode) => {
      const filtered = treeStore.filter((x) => {
        if (node.id === 'root') {
          return true
        } else {
          return x.id !== node.id
        }
      })
      setTreeStore(filtered)
    },
    [treeStore]
  )

  const edit = useCallback(
    (id: string, newName: string) => {
      let treeStoreX = []
      for (let x of treeStore) {
        if (x.id === id) {
          if (!!newName) {
            x.name = newName
          }
        }
        treeStoreX.push(x)
      }
      setTreeStore(treeStoreX)
    },
    [treeStore]
  )

  const setEditing = useCallback(
    (id: string, isEditing: boolean) => {
      let treeStoreX = []
      for (let x of treeStore) {
        if (x.id === id) {
          x.isEditing = isEditing
        }
        treeStoreX.push(x)
      }
      setTreeStore(treeStoreX)
    },
    [treeStore]
  )

  const moveUp = useCallback(
    (node: TreeNode) => {
      const orderId = node?.orderId
      if (orderId && orderId > 1) {
        const preNode = treeStore.find((x) => x.parent === node.parent && x.orderId === orderId - 1)
        let newTreeStore = null
        if (preNode) {
          newTreeStore = treeStore.filter((x) => x.id !== node.id && x.id !== preNode?.id)
          newTreeStore.push({...node, orderId: preNode?.orderId})
          newTreeStore.push({...preNode, orderId: orderId})
        }
        newTreeStore && setTreeStore(newTreeStore)
      }
    },
    [treeStore]
  )
  const moveDown = useCallback(
    (node: TreeNode) => {
      const orderId = node?.orderId
      const nextNode =
        orderId && treeStore.find((x) => x.parent === node.parent && x.orderId === orderId + 1)
      if (nextNode) {
        const newTreeStore = treeStore.filter((x) => x.id !== node.id && x.id !== nextNode.id)
        newTreeStore.push({...node, orderId: nextNode.orderId})
        newTreeStore.push({...nextNode, orderId: orderId})
        setTreeStore(newTreeStore)
      }
    },
    [treeStore]
  )

  // --------------------------------------------------
  // Schema
  // --------------------------------------------------
  const [schemaList, setSchemaList] = useState<any[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const appendSchema = useCallback((schema: any) => {
    setSchemaList((x) => {
      return [schema, ...x]
    })
  }, [])

  const contextValue = useMemo(() => {
    return {
      // Tree
      treeStore,
      clear,
      append,
      remove: remove,
      edit,
      setEditing,
      moveUp,
      moveDown,
      // Schema
      schemaList,
      appendSchema,
    }
  }, [append, remove, edit, setEditing, moveUp, moveDown, treeStore, schemaList, appendSchema])

  return (
    <Context.Provider value={contextValue}>
      <Container>
        <TreeView />
        <Modal
          className='modal fade'
          id='kt_modal_select_location'
          data-backdrop='static'
          tabIndex={-1}
          role='dialog'
          show={showModal}
          dialogClassName='modal-ml modal-dialog-700'
          aria-hidden='true'
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' style={{color: '#5a5d72'}}>
                JSON VIEW
              </h5>
              <div
                className='btn btn-icon btn-sm btn-active-light-primary ms-2'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setShowModal(false)}
              >
                <KTSVG
                  path='/media/icons/duotune/arrows/arr061.svg'
                  className='svg-icon svg-icon-2x'
                />
              </div>
            </div>
            <div className='modal-body'>
              <JsonView />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-light'
                data-bs-dismiss='modal'
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
        <Toolbox
          clear={clear}
          setStore={setTreeStore}
          setSchemaList={setSchemaList}
          appendSchema={appendSchema}
          setShowModal={setShowModal}
        />
      </Container>
    </Context.Provider>
  )
}

const DesignerWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DESIGNER'})}</PageTitle>
      <EditorPage />
    </>
  )
}

export { DesignerWrapper }

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap: 1.5rem;
  height: 95vh;
`;
