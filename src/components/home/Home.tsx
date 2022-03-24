import musicCall from '../../apiCalls/musicCall';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContextWrapper';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const fetchWorks = async (id: string) => {
    const data = await musicCall.getWorksFromComposerId(id);
    console.log(data.works);
  }

  const searchSomething = async () => {
    const data = await musicCall.searchMusic('bach');
    console.log(data.results)
  }

  return (
    <StyledContainer theme={theme}>
      <h1>Testing APIs</h1>
      <button onClick={() => fetchWorks('149')}>Fetch works</button>
      <button onClick={searchSomething}>Search</button>
    </StyledContainer>
  )
}

export default Home