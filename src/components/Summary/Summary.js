import React from 'react'
import { PageContainer, Flex, Text } from '@/ui'
import { SummarySection, SummaryWrap } from './Summary.styled'

const Summary = () => {
  return (
    <SummarySection>
      <PageContainer>
        <SummaryWrap>
          <Text color="text.button">About me and my work</Text>
        </SummaryWrap>
      </PageContainer>
    </SummarySection>
  )
}

export default Summary
