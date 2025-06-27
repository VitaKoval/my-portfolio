import React from 'react'
import { TechItemContainer, TechListWrap } from './TechStack.styled'
import { Flex, Text } from '@/ui'

function TechStackItems(items) {
  return (
    <TechListWrap>
      {items.map(({ title, subtitle, Icon }) => (
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
}

export default TechStackItems
