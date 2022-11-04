import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Loading } from "../../../components/Loading";
import {useTreeView} from "../model";
import toJsonSchema from 'to-json-schema'
import { convertTreeToSchemaV4 } from "../helpers/convertTreeToSchema";

const JsonView: React.FC = () => {
    const tree = useTreeView();
    const [dataTree, setDataTree] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const options = {
      objects: {
        postProcessFnc: (schema, obj, defaultFnc) => {
            let newSchema = {...schema}
            Object.keys(obj)?.length && Object.keys(obj).forEach((item) => {
              newSchema.properties[item].type = obj[item]?.toLowerCase()
            })
            return {
              ...defaultFnc(schema, obj),
              required: Object.getOwnPropertyNames(obj),
            }
          }
      },
      arrays: {mode: 'tuple'},
    }

    const convertTree = async (tree) => {
      setIsLoading(true)
      try {
        const newTree = convertTreeToSchemaV4(JSON.parse(JSON.stringify(tree)))
        const schema = await toJsonSchema(JSON.parse(JSON.stringify(newTree)), options)
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
    
    const stellar = {
      title: 'Asset Metadata',
      type: 'object',
      properties: {
        name: {
          type: 'string',
          value: '',
        },
        description: {
          type: 'string',
          value: '',
        },
        image: {
          type: 'string',
          value: '',
        },
      },
      required: ['name', 'description', 'image'],
    }
    
    return (
      <StyledJsonView>
        {isLoading ? <Loading /> : <pre>{JSON.stringify(stellar, null, 4)}</pre>}
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
