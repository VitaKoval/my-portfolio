import React from 'react'
import { PageContainer, Flex, Heading, Text, Img } from '@/ui'
import {
  TachStackSection,
  TechItemContainer,
  TechListWrap,
} from './TechStack.styled'
import { techStack } from './definitions'

function TechStack(props) {
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
          {techStack.map(({ title, subtitle, Icon }) => (
            <TechItemContainer>
              {Icon && <Icon />}
              <Flex column flex="1">
                <Text color="foreground">{title}</Text>
                <Text variant="smallReg">{subtitle}</Text>
              </Flex>
            </TechItemContainer>
          ))}
        </TechListWrap>
      </PageContainer>
    </TachStackSection>
  )
}

export default TechStack
