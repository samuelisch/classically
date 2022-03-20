import styled from 'styled-components'
import { ComposerType } from '../../reducers/composersSlice'
import { showYear } from '../../utils'

import Period from './Period'

type PropTypes = {
  periods: string[],
  composerList: ComposerType[]
}

const StyledContainer = styled.div`

`

const PeriodList = ({periods, composerList}: PropTypes) => {
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
      {allPeriods}
    </StyledContainer>
  )
}

export default PeriodList