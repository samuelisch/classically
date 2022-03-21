import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ComposerWorkType } from "../../reducers/dumpSlice";
import { useAppSelector } from "../../reducers/hooks";
import Work, { WorkType } from "./Work";
import styled from "styled-components";

const StyledList = styled.ul`

`


const WorksList = ({ composerName }: any) => {
  const navigate = useNavigate();
  const { dumpList } = useAppSelector((state) => state.dump);
  const [composerWorks, setComposerWorks] = useState<ComposerWorkType[] | []>([]);

  useEffect(() => {
    if (composerName) {
      const selectedComposer = dumpList.find(composer => composer.complete_name === composerName)
      if (selectedComposer) {
        setComposerWorks(selectedComposer.works)
      }
    }
  }, [composerName, dumpList])

  const listOfWorks = composerWorks.map((work: WorkType, i) => (
    <Work 
      key={i}
      genre={work.genre}
      subtitle={work.subtitle}
      title={work.title}
    />
  ))

  if (!composerWorks) {
    return <h1>Loading ...</h1>
  }

  return (
    <StyledList>
      {listOfWorks}
    </StyledList>
  )
}

export default WorksList