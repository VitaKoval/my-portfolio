import React from 'react'
import { OverviewSection } from './Overview.styled'
import { PageContainer, Text, Heading, Flex } from '@/ui'

const Overview = () => {
  return (
    <OverviewSection>
      <PageContainer>
        <Flex minHeight="33rem" column>
          <Heading>Heading</Heading>
          <Text>Overview</Text>
        </Flex>
      </PageContainer>
    </OverviewSection>
  )
}

export default Overview
