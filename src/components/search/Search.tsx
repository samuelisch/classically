import { useEffect, useState } from "react";
import styled from "styled-components";
import musicCall from "../../apiCalls/musicCall";

import ResultList, { ResultType } from "./ResultList";

const StyledContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 70%;
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
  margin: 0 auto;
`;

const Search = () => {
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
    <StyledContainer>
      <StyledInput
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
