import { useEffect, useState } from "react";
import { ComposerType } from "../../reducers/composersSlice";
import { useAppSelector } from "../../reducers/hooks";
import Work, { WorkType } from "./Work";
import styled from "styled-components";
import musicCall from "../../apiCalls/musicCall";

type PropsType = {
  composerId: string
}

const StyledList = styled.ul`
  border-top: 1px solid rgb(150, 150, 150);
  border-bottom: 1px solid rgb(150, 150, 150);
`

const WorksList = ({ composerId }: PropsType) => {
  const { composerList } = useAppSelector((state) => state.composers);
  const [composerWorks, setComposerWorks] = useState<WorkType[] | []>([]);

  useEffect(() => {
    if (composerId) {
      const selectedComposer = composerList.find(composer => composer.id === composerId)
      if (selectedComposer) {
        musicCall
          .getWorksFromComposerId(composerId)
          .then(response => {
            console.log(response.works)
            setComposerWorks(response.works)
          })
      }
    }
  }, [composerId, composerList])

  const listOfWorks = composerWorks.map((work: WorkType) => (
    <Work 
      key={work.id}
      id={work.id}
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