import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import musicCall from "../../apiCalls/musicCall";
import { ThemeContext } from "../../ThemeContextWrapper";

import ResultList, { ResultType } from "./ResultList";

const StyledContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
  transition: background .1s;

  h1 {
    color: ${props => props.theme.color};
  }
`;

const StyledInput = styled.input`
  width: 70%;
  max-width: 500px;
  padding: 5px 10px;
  border: none;
  margin: 0 auto;
  background: ${props => props.theme.background};
  border-bottom: 1px solid rgb(150, 150, 150);
  color: ${props => props.theme.color};
  transition: background .1s;

  &:focus {
    outline: none;
  }
`;

const Search = () => {
  const { theme } = useContext(ThemeContext);
  const [inputVal, setInputVal] = useState("");
  const [results, setResults] = useState<ResultType[]>([]);
  const [empty, setEmpty] = useState(false);
  
  useEffect(() => {
    let mounted = true
    if (inputVal.length < 3) {
      setEmpty(false)
      setResults([])
      return
    }

    musicCall
      .searchMusic(inputVal)
      .then(response => {
        if (mounted) {
          if (!response.results) {
            setEmpty(true)
          } else {
            setEmpty(false)
            const filteredResults = response.results.filter((result: ResultType) => result.work)
            setResults(filteredResults)
          }
        }
      })
      .catch(err => {
        if (mounted) {
          console.error(err)
        }
      })

    return () => {
      mounted = false;
    }
  }, [inputVal])

  return (
    <StyledContainer theme={theme}>
      <StyledInput
        theme={theme}
        type="text"
        id="searchInput"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        autoComplete="off"
        placeholder="Search title ..."
      />
      {empty 
        ? <h1>Search returned nothing!</h1>
        : 
        <ResultList results={results} />
      }
    </StyledContainer>
  );
};

export default Search;
