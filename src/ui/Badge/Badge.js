import React from 'react'
import { Flex, Text } from '@/ui'

const Badge = ({ title }) => {
  return (
    <Flex border="1px solid" py="0.375rem" px={3} borderRadius="0.375rem">
      <Text variant="body14r">{title}</Text>
    </Flex>
  )
}

export default Badge
