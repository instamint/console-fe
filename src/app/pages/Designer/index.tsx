import { nanoid } from 'nanoid'
import React, { FC, useCallback, useMemo, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { PageTitle } from '../../../_metronic/layout/core'
import ModalTreeView from './Modal/treeView'
import { Context, TreeNode, TreeStore } from './model'
import Toolbox from './Toolbox'
import TreeView from './view/TreeView'

const EditorPage: React.FC = () => {
  // --------------------------------------------------
  // treeStore
  // --------------------------------------------------
  const [treeStore, setTreeStore] = useState<TreeStore>([
    {
      id: 'root',
      category: {
        id: 'root',
        name: 'assetType',
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
          name: 'assetType',
        },
        isEditing: false,
        name: 'Json Schema',
      },
    ])
  }, [])

  const append = useCallback((node: TreeNode, from: string) => {
    console.debug('append', node)
    if (from === 'nodeview') {
      // Move Json from node view
      setTreeStore((x) => {
        let newTree = [...x]
        let location
        newTree.forEach((item, index) => {
          if (item?.id === node?.id) {
            location = index
            return
          }
        })
        newTree[location].parent = node?.parent
        return newTree
      })
    } else {
      // Add Json from Properties right
      setTreeStore((x) => {
        const numOfChild = x.filter((y) => y.parent === node.parent).length
        node.orderId = numOfChild + 1
        node.name = `${node.name} (${numOfChild + 1})`
        return [...x, node]
      })
    }
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
          if (!!newName || newName === '') {
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

  const duplicateSchema = useCallback(
    (node: TreeNode) => {
      let newNanoId = nanoid()
      let arrDuplicate = [
        {
          ...node,
          id: newNanoId,
        },
      ]
      let getNewId = {
        [node.id]: newNanoId,
      }
      let check = {}
      check[node.id] = true

      if (treeStore?.length) {
        treeStore?.forEach((item) => {
          if (check[item?.parent] === true) {
            newNanoId = nanoid()
            getNewId[item.id] = newNanoId
            check[item.id] = true
            arrDuplicate.push({
              ...item,
              id: newNanoId,
              parent: getNewId[item.parent],
            })
          }
        })
      }

      setTreeStore((preState) => [...preState, ...arrDuplicate])
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
      duplicateSchema,
      // Schema
      schemaList,
      appendSchema,
    }
  }, [
    append,
    remove,
    edit,
    setEditing,
    moveUp,
    moveDown,
    duplicateSchema,
    treeStore,
    schemaList,
    appendSchema,
  ])

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
          <ModalTreeView setShowModal={setShowModal} />
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

export {DesignerWrapper}

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap: 1.5rem;
  height: 95vh;
`;
