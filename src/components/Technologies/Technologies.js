import React from 'react'
import { Flex, Box, Heading, Text } from '@/ui'
import { techStack } from './definitions'
import TechItem from './TechItem'

const Technologies = () => {
  return (
    <Flex
      column
      p={16}
      flex={1}
      gap="3.25rem"
      alignItems="center"
      overflow="auto"
    >
      <Flex column gap={4} alignItems="center">
        <Heading variant="h2">Current technologies</Heading>
        <Box maxWidth="39.5rem">
          <Text>
            I’m proficient in a range of modern technologies that empower me to
            build highly functional solutions. Here are some of the technologies
            I use.
          </Text>
        </Box>
      </Flex>
      <Flex wrap gap={4} justifyContent="center">
        {techStack &&
          techStack.map(({ title, subtitle, image }) => (
            <TechItem
              key={title}
              title={title}
              subtitle={subtitle}
              image={image}
            />
          ))}
      </Flex>
    </Flex>
  )
}

export default Technologies
