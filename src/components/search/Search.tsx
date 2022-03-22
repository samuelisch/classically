import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`

const StyledInput = styled.input`
  width: 70%;
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
`

const Search = () => {
  // useState for searchInput value
  // useEffect to search call search api if value is not empty, cleanup on re-render

  // populate result component with whatever returned
  // link result to navigate to track instance using track and composer id
  return (
    <StyledContainer>
      <StyledInput type="text" id="searchInput" autoComplete="off" placeholder="Search piece ..." />
    </StyledContainer>
  )
}

export default Search