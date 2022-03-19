import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { fetchAllComposers } from "../../reducers/composersSlice";
import Period from "./Period";

const StyledContainer = styled.div`
  margin: 0 auto;
`;

const Timeline = () => {
  const dispatch = useAppDispatch()
  const [loaded, setLoaded] = useState(false);
  const { composerList, status } = useAppSelector((state) => state.composers);

  useEffect(() => {
    if (status !== "loaded") {
      dispatch(fetchAllComposers());
    }
  }, []);

  useEffect(() => {
    if (status === "loaded") {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [status]);

  return (
    <StyledContainer>
      <h1>Composer List</h1>
      {loaded 
        ? 
        <>
          <Period period="Medieval" composerList={composerList} />
        </> 
        : <h1>Loading ...</h1>}
    </StyledContainer>
  );
};

export default Timeline;
