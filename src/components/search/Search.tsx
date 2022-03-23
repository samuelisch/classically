import { useEffect, useState } from "react";
import styled from "styled-components";
import musicCall from "../../apiCalls/musicCall";
import { ComposerType } from "../../reducers/composersSlice";
import { WorkType } from "../works/Work";
import ResultList from "./ResultList";

type ResultType = {
  composer: ComposerType,
  work: WorkType
}

const StyledContainer = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 70%;
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
`;

const StyledResultsList = styled.ul``

const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const [results, setResults] = useState<ResultType[]>([])
  
  useEffect(() => {
    let mounted = true
    if (inputVal.length >= 3) {
      musicCall
        .searchMusic(inputVal)
        .then(response => {
          if (mounted) {
            console.log(response.results)
          }
        })
        .catch(err => {
          if (mounted) {
            console.error(err)
          }
        })
    }

    return () => {
      mounted = false;
    }
  }, [inputVal])

  // populate result component with whatever returned
  // link result to navigate to track instance using track and composer id
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
      <StyledResultsList>

      </StyledResultsList>
    </StyledContainer>
  );
};

export default Search;
