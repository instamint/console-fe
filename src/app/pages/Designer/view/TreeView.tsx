import React, { useState } from 'react';
import styled from 'styled-components';
import { useTreeView } from '../model';
import NodeView from './NodeView';

const TreeView: React.FC = () => {
    const tree = useTreeView();

    const [dragOver, setDragOver] = useState(false);

    return (
        <StyledTreeViewContainer
            dragOver={dragOver}>
            {
                <NodeView key={tree.id} {...tree} />
            }
        </StyledTreeViewContainer>
    );
};

export default TreeView;

const StyledTreeViewContainer = styled.div<{ dragOver: boolean }>`
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  border-color: #eff2f5;
  box-shadow: 0px 0px 20px 0px rgb(76 87 125 / 2%);
  overflow: auto;
`;

