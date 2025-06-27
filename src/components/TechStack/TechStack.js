import React from 'react'
import { PageContainer, Heading, Text } from '@/ui'
import {
  TachStackSection,
  TachStackTitleContainer,
  TechListWrap,
} from './TechStack.styled'
import { techStack } from './definitions'
import ContentToggle from '../../ui/ContentToggle'
import TechStackItems from './TechStackItems'

function TechStack() {
  const visibleContent = techStack.slice(0, 6)
  const hiddenContent = techStack.slice(6)

  return (
    <TachStackSection>
      <PageContainer>
        <TachStackTitleContainer>
          <Heading variant="h2" styledColor="gradient">
            What’s in My Stack?
          </Heading>
          <Text>
            Everything I use to build fast, modern, and user-friendly web
            products.
          </Text>
        </TachStackTitleContainer>
        <TechListWrap>
          <ContentToggle
            visibleContent={TechStackItems(visibleContent)}
            hiddenContent={TechStackItems(hiddenContent)}
          />
        </TechListWrap>
      </PageContainer>
    </TachStackSection>
  )
}

export default TechStack
