import styled from "styled-components";
import { SearchResultType } from "../assets/types";

import Result from "./Result";

const StyledList = styled.ul`
  margin-top: 20px;
  border-top: 1px solid rgb(100, 100, 100);
  border-bottom: 1px solid rgb(100, 100, 100);
`;

type PropsType = {
  results: SearchResultType[];
};

const ResultList = ({ results }: PropsType) => {
  const allTracks = results.map((result: SearchResultType) => (
    <Result
      key={result.work.id} // TO BE REPLACED WITH ID
      result={result}
    />
  ));

  if (!allTracks.length) {
    return null;
  }

  return <StyledList>{allTracks}</StyledList>;
};

export default ResultList;
