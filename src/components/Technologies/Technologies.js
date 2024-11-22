import React from 'react'
import { Flex, Box, Heading, Text, PageContainer } from '@/ui'
import { techStack } from './definitions'
import TechItem from './TechItem'

const Technologies = () => {
  return (
    <PageContainer>
      <Flex column py={16} gap="3.25rem" alignItems="center">
        <Flex column gap={4} alignItems="center">
          <Heading variant="h2">Current technologies</Heading>
          <Box maxWidth="39.5rem">
            <Text>
              I’m proficient in a range of modern technologies that empower me
              to build highly functional solutions. Here are some of the
              technologies I use.
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
    </PageContainer>
  )
}

export default Technologies
