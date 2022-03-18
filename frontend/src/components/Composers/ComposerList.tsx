import React from 'react';
import styled from 'styled-components'
import Composer from './Composer';
import type { ComposerType } from '../../reducers/composersSlice';

const StyledContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`

const StyledList = styled.ul`
  list-style: none;
`

export interface PropsType {
  composers: ComposerType[]
}

const ComposerList = ({ composers }: PropsType) => {
  const allComposers = composers.map((composer:any) => {
    return (
    <Composer 
      key={composer.id}
      id={composer.id}
      birth={composer.birth}
      death={composer.death}
      name={composer.name}
      completeName={composer.complete_name}
      epoch={composer.epoch}
      portrait={composer.portrait}
    />
    )
  })

  return (
    <StyledContainer>
      <h1>Composer List</h1>
      <StyledList>
        {allComposers}
      </StyledList>
    </StyledContainer>
  )
}

export default ComposerList