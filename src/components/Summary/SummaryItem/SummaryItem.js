import React from 'react'
import { Text } from '@/ui'
import { SummaryItemStyled } from '../Summary.styled'

const SummaryItem = ({ text }) => {
  return (
    <SummaryItemStyled>
      <Text color="text.button">{text}</Text>
    </SummaryItemStyled>
  )
}

export default SummaryItem
