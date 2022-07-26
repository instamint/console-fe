import React from "react";
import styled from "styled-components";
import { useSchema } from "./model";


const JsonSchemaView: React.FC = () => {
    const schema = useSchema();
    return (
        <StyledJsonSchemaView>
            <pre>{JSON.stringify(schema, null, 2)}</pre>
        </StyledJsonSchemaView>
    )
}

export default JsonSchemaView;

const StyledJsonSchemaView = styled.div`
    padding: 8px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-bottom: 1px dashed #ccc;
`;