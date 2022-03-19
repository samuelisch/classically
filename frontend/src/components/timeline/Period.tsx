import styled from 'styled-components'
import { ComposerType } from '../../reducers/composersSlice';
import Composer from './Composer'

const StyledContainer = styled.div`
  padding: 8px 0 0 15px;
  background: orange;
`

const StyledList = styled.ul`
  list-style: none;
`;

type PropsType = {
  period: string,
  composerList: ComposerType[]
}

const Period = ({ period, composerList }: PropsType) => {
  const composers = composerList.map((composer: any) => {
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
    );
  });

  return (
    <StyledContainer>
      <h4>{period}</h4>
      <StyledList>{composers}</StyledList>
    </StyledContainer>
  )
}

export default Period