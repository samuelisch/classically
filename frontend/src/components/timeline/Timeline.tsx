import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { fetchAllComposers } from "../../reducers/composersSlice";
import { showYear } from "../../utils";

import Period from "./Period";

const StyledContainer = styled.div`
  margin: 0 auto;
`;

const Timeline = () => {
  const dispatch = useAppDispatch();
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

  const periods = [
    "Medieval",
    "Renaissance",
    "Baroque",
    "Classical",
    "Early Romantic",
    "Romantic",
    "Late Romantic",
    "20th Century",
    "Post-War",
    "21st Century"
  ];

  const allPeriods = periods.map((period, i) => {
    const periodComposers = composerList
      .filter(composer => composer.epoch === period)
      .sort((a, b) => parseInt(showYear(a.birth)) - parseInt(showYear(b.birth)))
    return (
      <Period
        key={i}
        period={period}
        composerList={periodComposers}
      />
    )
  })

  return (
    <StyledContainer>
      <h1>Composer List</h1>
      {loaded ? (
        <>
          {allPeriods}
        </>
      ) : (
        <h1>Loading ...</h1>
      )}
    </StyledContainer>
  );
};

export default Timeline;
