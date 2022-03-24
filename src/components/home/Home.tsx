import musicCall from '../../apiCalls/musicCall';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../ThemeContextWrapper';
import ViewedComposers from './ViewedComposers';
import ViewedWorks from './ViewedWorks';
import RandomWorks from './RandomWorks';
import { RandomWorkType } from '../assets/types';

const StyledContainer = styled.div`
  height: 100%;
  background: ${props => props.theme.background};
  transition: background .1s;
  color: ${props => props.theme.color};
  padding: 20px;
`

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [randomWorks, setRandomWorks] = useState<RandomWorkType[]>([])

  useEffect(() => {
    musicCall
      .getRandomWorks()
      .then(response => {
        const slicedWorks = response.works.slice(0, 6);
        setRandomWorks(slicedWorks)
      })
  }, [])

  return (
    <StyledContainer theme={theme}>
      <ViewedWorks />
      <ViewedComposers />
      <RandomWorks randomWorks={randomWorks} />
    </StyledContainer>
  )
}

export default Home