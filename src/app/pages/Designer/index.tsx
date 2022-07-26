import React, { FC, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Context, TreeStore, TreeNode } from './model';
import Toolbox from './Toolbox';
import TreeView from './TreeView';
import JsonView from './JsonView';
import { PageTitle } from '../../../_metronic/layout/core';
import { useIntl } from 'react-intl';

const EditorPage: React.FC = () => {
  // --------------------------------------------------
  // treeStore
  // --------------------------------------------------
  const [treeStore, setTreeStore] = useState<TreeStore>([
    {
      id: 'root',
      type: 'jsonSchema',
      isEditing: false,
      name: 'Json Schema',
    },
  ])

  const clear = useCallback(() => {
    setTreeStore([
      {
        id: 'root',
        type: 'jsonSchema',
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
          console.log('Not allowed!')
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
  const appendSchema = useCallback((schema: any) => {
    console.log('appendSchema', schema)
    setSchemaList((x) => {
      return [...x, schema]
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
        <JsonView />
        <Toolbox
          clear={clear}
          setStore={setTreeStore}
          setSchemaList={setSchemaList}
          appendSchema={appendSchema}
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
  grid-template-columns: 2.4fr 2.4fr 1.5fr;
  grid-gap: 1.5rem;
  height: 95vh;
`;
