import React from 'react'
import { OverviewSection } from './Overview.styled'
import { PageContainer, Text, Heading } from '@/ui'

const Overview = () => {
  return (
    <OverviewSection>
      <PageContainer>
        <Heading>Heading</Heading>
        <Text>Overview</Text>
      </PageContainer>
    </OverviewSection>
  )
}

export default Overview
