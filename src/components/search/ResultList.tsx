import { ComposerType } from '../../reducers/composersSlice'
import { WorkType } from '../works/WorkPage'
import styled from 'styled-components'

import Result from './Result'

export type ResultType = {
  composer: ComposerType,
  work: WorkType
}

const StyledList = styled.ul`
  margin-top: 20px;
  border-top: 1px solid rgb(150, 150, 150);
  border-bottom: 1px solid rgb(150, 150, 150);
`

export type PropsType = {
  results: ResultType[]
}

const ResultList = ({ results }: PropsType) => {
  const allTracks = results.map((result: ResultType) => (
    <Result 
      key={result.work.id} // TO BE REPLACED WITH ID
      composerId={result.composer.id}
      genre={result.work.genre}
      titleId={result.work.id}
      title={result.work.title}
      composerName={result.composer.complete_name}
    />
  ))

  if (!allTracks.length) {
    return null
  }

  return (
    <StyledList>
      {allTracks}
    </StyledList>
  )
}

export default ResultList