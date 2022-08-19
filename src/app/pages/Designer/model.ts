import { createContext, useContext, useMemo } from 'react';
import convertTreeToSchema from './helpers/convertTreeToSchema';

export type PropertyType =
  | {
      type: 'text';
    }
  | {
      type: 'number';
    }
  | {
      type: 'boolean';
    }
  | {
      type: 'choice';
      options: string[];
    }
  | {
      type: 'array';
    };

export type ItemType = {
  id?: string
  name: string;
  type?: any;
  category?: {
    id?: string
    name?: string
  };
  properties: Record<string, PropertyType>;
  value?: any;
  leaf?: boolean; // can have child node or not
  validChildType?: string[];
  from?: string
};



export type TreeNode = {
  id: string;
  name: string;
  type?: any;
  category?: {
    id?: string;
    name?: string;
  };

  valueSchema?: Object;
  value?: string

  isEditing: boolean;
  parent?: string; // parentId
  children?: TreeNode[]; // store
  orderId?: number;
};

export type TreeStore = TreeNode[]; // store tree in an array

export type ContextType = {
  treeStore: TreeStore
  clear: () => void
  append: (node: TreeNode, type: string) => void
  remove: (node: TreeNode) => void
  edit: (id: string, newName: string) => void
  setEditing: (id: string, isEditing: boolean) => void
  moveUp: (node: TreeNode) => void
  moveDown: (node: TreeNode) => void
  duplicateSchema: (node: TreeNode) => void

  schemaList: any[]
  appendSchema: (schema: any) => void
}

export const Context = createContext<ContextType>(
  null as unknown as ContextType,
);

function toTree(source: TreeStore, item?: TreeNode) {
  if (!item) {
    item = source.find((item) => item?.id === 'root')
  }

  let parent: TreeNode = { ...item, children: [] };
  if (parent) {
    parent.children = source
      .filter((x: any) => x.parent === item?.id)
      .sort((a: any, b: any) => +a?.orderId - +b?.orderId)
      .map((y) => toTree(source, y))
  }

  return parent;
}

function toSchema(source: TreeStore) {
  // convert array of TreeNode to schema Json
  const tree = toTree(source);
  const schema = convertTreeToSchema(tree);

  return schema;
}

export const useStore = () => {
  const { treeStore } = useContext(Context);
  return useMemo(() => {
    return treeStore
  }, [treeStore]);
}

export const useTreeView = () => {
  const { treeStore } = useContext(Context);

  return useMemo(() => {
    return toTree(treeStore);
  }, [treeStore]);
};

export const useSchema = () => {
  const { treeStore } = useContext(Context);

  return useMemo(() => {
    return toSchema(treeStore);
  }, [treeStore]);
}

export const useById = (id: string) => {
  const { treeStore } = useContext(Context);
  return useMemo(() => {
    return treeStore.filter(x => x.id === id)[0]
  }, [treeStore])
}

export const useClear = () => {
  const { clear } = useContext(Context);
  return clear;
};

export const useAppend = () => {
  const { append } = useContext(Context);
  return append;
};

export const useDel = () => {
  const {remove} = useContext(Context);
  return remove;
}

export const useEdit = () => {
  const {edit} = useContext(Context);
  return edit;
}

export const useEditing = () => {
  const {setEditing} = useContext(Context);
  return setEditing;
}

export const useMoveUp = () => {
  const {moveUp} = useContext(Context);
  return moveUp;
}

export const useMoveDown = () => {
  const {moveDown} = useContext(Context);
  return moveDown;
}

// schema
export const useSchemaList = () => {
  const { schemaList } = useContext(Context);
  return useMemo(() => {
    return schemaList
  }, [schemaList])
}

export const useAppendSchema = () => {
  const {appendSchema} = useContext(Context);
  return appendSchema;
}

export const useDuplicate = () => {
  const {duplicateSchema} = useContext(Context)
  return duplicateSchema
}