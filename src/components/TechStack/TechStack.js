import React from 'react'
import { PageContainer, Flex, Heading, Text, Img } from '@/ui'
import {
  TachStackSection,
  TechItemContainer,
  TechListWrap,
} from './TechStack.styled'
import { techStack, techStackShort } from './definitions'
import ContentToggle from '@/ui/ContentToggle'

function TechStack(props) {
  const visibleContent = (
    <TechListWrap>
      {techStackShort.map(({ title, subtitle, Icon }) => (
        <TechItemContainer key={title}>
          {Icon && <Icon />}
          <Flex column flex="1">
            <Text color="foreground">{title}</Text>
            <Text variant="smallReg">{subtitle}</Text>
          </Flex>
        </TechItemContainer>
      ))}
    </TechListWrap>
  )

  const hiddenContent = (
    <TechListWrap>
      {techStack.map(({ title, subtitle, Icon }) => (
        <TechItemContainer key={title}>
          {Icon && <Icon />}
          <Flex column flex="1">
            <Text color="foreground">{title}</Text>
            <Text variant="smallReg">{subtitle}</Text>
          </Flex>
        </TechItemContainer>
      ))}
    </TechListWrap>
  )

  return (
    <TachStackSection>
      <PageContainer>
        <Flex variant="columnCenter">
          <Heading variant="h2" styledColor="gradient">
            What’s in My Stack?
          </Heading>
          <Text>
            Everything I use to build fast, modern, and user-friendly web
            products.
          </Text>
        </Flex>
        <TechListWrap>
          <ContentToggle
            visibleContent={visibleContent}
            hiddenContent={hiddenContent}
          />
          {/* {techStack.map(({ title, subtitle, Icon }) => (
            <TechItemContainer key={title}>
              {Icon && <Icon />}
              <Flex column flex="1">
                <Text color="foreground">{title}</Text>
                <Text variant="smallReg">{subtitle}</Text>
              </Flex>
            </TechItemContainer>
          ))} */}
        </TechListWrap>
      </PageContainer>
    </TachStackSection>
  )
}

export default TechStack
