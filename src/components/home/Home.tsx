import musicCall from '../../apiCalls/musicCall';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContextWrapper';
import ViewedComposers from './ViewedComposers';
import ViewedWorks from './ViewedWorks';

const StyledContainer = styled.div`
  height: 100%;
  background: ${props => props.theme.background};
  transition: background .1s;
  color: ${props => props.theme.color};
  padding: 20px;
`

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledContainer theme={theme}>
      <ViewedWorks />
      <ViewedComposers />
    </StyledContainer>
  )
}

export default Home