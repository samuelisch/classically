import styled from 'styled-components'
import { ComposerType } from '../../reducers/composersSlice';
import { listColor, listYears } from '../assets/utils';
import { HashLink } from 'react-router-hash-link'

import Composer from './PeriodComposer'

type StyledProps = {
  period: string
}

const StyledContainer = styled.div<StyledProps>`
  padding-left: 20px;
  background: ${props => listColor(props.period)};

  .periodTitle {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => listColor(props.period)};
    position: sticky;
    top: 64px;
    z-index: 2;

    h4 {
      font-size: 1.5rem;
      color: rgb(240, 240, 240);
      margin-right: 10px;
    }

    .years {
      font-size: 1.2rem;
      color: rgb(240, 240, 240);
    }

    a {
      color: rgb(240, 240, 240);
      text-decoration: none;
      font-size: 1.1rem;

      &:hover {
        color: red;
      }
    }
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
      <div className="periodTitle">
        <div className="periodDetails">
          <h4>{period}</h4>
          <span className="years">{listYears(period)}</span>
        </div>
        <HashLink smooth to="#">Back to top</HashLink>
      </div>
      <StyledList>{composers}</StyledList>
    </StyledContainer>
  )
}

export default Period