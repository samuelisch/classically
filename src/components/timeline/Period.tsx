import styled from 'styled-components'
import { ComposerType } from '../../reducers/composersSlice';
import { listColor } from '../assets/utils';

import Composer from './PeriodComposer'

type StyledProps = {
  period: string
}

const StyledContainer = styled.div<StyledProps>`
  padding-left: 20px;
  background: ${props => listColor(props.period)};

  h4 {
    padding: 3px 10px;
    font-size: 1.5rem;
    color: rgb(240, 240, 240);
  }
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
        complete_name={composer.complete_name}
        epoch={composer.epoch}
        portrait={composer.portrait}
      />
    );
  });

  return (
    <StyledContainer id={period} period={period}>
      <h4>{period}</h4>
      <StyledList>{composers}</StyledList>
    </StyledContainer>
  )
}

export default Period