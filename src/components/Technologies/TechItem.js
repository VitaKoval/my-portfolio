import React from 'react'
import { Img, Flex, Text } from '@/ui'
import { TechItemWrap, TechItemImg } from './Technologies.styled'

const TechItem = ({ image, title, subtitle }) => {
  return (
    <TechItemWrap>
      <TechItemImg>
        <Img src={image} alt="Logo Technology" variant="contain" />
      </TechItemImg>
      <Flex column gap={1}>
        <Text variant="body18b">{title}</Text>
        <Text variant="body14r" letterSpacing="0.02rem">
          {subtitle}
        </Text>
      </Flex>
    </TechItemWrap>
  )
}

export default TechItem
