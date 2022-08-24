import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Loading } from "../../../components/Loading";
import {useTreeView} from "../model";
import toJsonSchema from 'to-json-schema'

const JsonView: React.FC = () => {
    const tree = useTreeView();
    const [dataTree, setDataTree] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const options = {
      objects: {
        postProcessFnc: (schema, obj, defaultFnc) => {
          let newSchema = {...schema}
          delete newSchema.properties.isEditing
          delete newSchema.properties.parent
          delete newSchema.properties.orderId
          return {
            ...defaultFnc(newSchema, obj),
            required: Object.getOwnPropertyNames(obj).filter(
              (i) => i !== 'parent' && i !== 'isEditing' && i !== 'orderId'
            ),
          }
        },
      },
      arrays: {mode: 'tuple'},
    }

    const convertTree = async (tree) => {
      setIsLoading(true)
      try {
        const schema = await toJsonSchema(JSON.parse(JSON.stringify(tree)), options)
        setDataTree({
          $schema: "http://json-schema.org/draft-04/schema#",
          ...schema,
        })
      } catch (error) {
        console.error({error})
      } finally {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      convertTree(tree)
      return () => {
        setDataTree({})
      }
    }, [tree])
    
    
    return (
      <StyledJsonView>
        {isLoading ? <Loading /> : <pre>{JSON.stringify(dataTree, null, 3)}</pre>}
      </StyledJsonView>
    )
};

export default JsonView;

const StyledJsonView = styled.div`
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  border-color: #eff2f5;
  box-shadow: 0px 0px 20px 0px rgb(76 87 125 / 2%);
  overflow: auto;
  padding-left: 15px;
  position: relative;
  overflow-y: auto;

  &::before {
    content: '';
    left: 15px;
    top: 0px;
    width: 1px;
    background-color: #e6e6e6;
    position: absolute;
  }
`;
