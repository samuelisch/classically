import { useEffect, useState } from "react";
import { useAppSelector } from "../../reducers/hooks";

import PeriodNavbar from "./PeriodNavbar";
import PeriodList from "./PeriodList";

const Timeline = () => {
  const [loaded, setLoaded] = useState(false);
  const { composerList, status } = useAppSelector((state) => state.composers);

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
    "21st Century",
  ];

  return (
    <>
      {loaded ? (
        <>
          <PeriodNavbar periods={periods} />
          <PeriodList periods={periods} composerList={composerList} />
        </>
      ) : (
        <h1>Loading ...</h1>
      )}
    </>
  );
};

export default Timeline;
