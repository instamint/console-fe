import React from 'react'
import styled from 'styled-components'
import IconDelete from '../../../images/delete.png'

export default function Favorite({listFavorite, handleRemoveFavorite, onDragStart}) {
  return (
    <StyledJsonSchemaList>
      {listFavorite?.length > 0 && <StyledJsonSchemaTitle>Favorites</StyledJsonSchemaTitle>}
      <UlListJson>
        {listFavorite.map((x, i) => (
          <StyledSchmaLabel key={i}>
            <Name draggable onDragStart={onDragStart} data-item={JSON.stringify(x?.property)}>
              {x?.property?.name}
            </Name>
            <Button
              onClick={() => handleRemoveFavorite(x?.property)}
              src={IconDelete}
              alt='edit'
            ></Button>
          </StyledSchmaLabel>
        ))}
      </UlListJson>
    </StyledJsonSchemaList>
  )
}

const StyledJsonSchemaList = styled.div`
`

const StyledJsonSchemaTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #009ef7;
  margin: 15px 0px;
  padding: 0px 8px
`
const UlListJson = styled.ul`
  list-style-type: circle;
  padding-left: unset;
`

const StyledSchmaLabel = styled.li`
  padding: 0.25em, 0.5em;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
`

const Name = styled.span`
  display: flex;
  min-width: 107px;
  cursor: move;
  padding: 5px 5px 5px 8px;
  border-radius: 8px;
`

const Button = styled.img`
  border: none;
  cursor: pointer;
  width: 17px;
  height: 17px;
  margin-left: 10px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`
