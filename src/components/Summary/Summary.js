import React from 'react'
import { PageContainer, Flex, Text, Heading, Box } from '@/ui'
import { SummarySection, SummaryWrap } from './Summary.styled'

const Summary = () => {
  return (
    <SummarySection>
      <PageContainer>
        <SummaryWrap>
          <Flex gap={8} flex={1}>
            <Flex width="50%">
              <Flex column gap={4}>
                <Heading variant="h3">Website Development</Heading>
                <Flex
                  border="1px solid"
                  borderColor="white"
                  borderRadius="16px"
                  px="16px"
                  py="8px"
                >
                  <Text color="text.button">
                    Create responsive and pixel-perfect websites that adapt
                    seamlessly to any device.
                  </Text>
                </Flex>
                <Flex
                  border="1px solid"
                  borderColor="white"
                  borderRadius="16px"
                  px="16px"
                  py="8px"
                >
                  <Text color="text.button">
                    Implement new functionality to meet business requirements.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Box width="1px" bg="white" />
            <Flex width="50%">
              <Flex column gap={4}>
                <Heading variant="h3">Application Development</Heading>
                <Flex
                  border="1px solid"
                  borderColor="white"
                  borderRadius="16px"
                  px="16px"
                  py="8px"
                >
                  <Text color="text.button">
                    Develop scalable and efficient applications using React,
                    Next.js, and other modern libraries and frameworks.
                  </Text>
                </Flex>
                <Flex
                  border="1px solid"
                  borderColor="white"
                  borderRadius="16px"
                  px="16px"
                  py="8px"
                >
                  <Text color="text.button">
                    Build applications from scratch, focusing on intuitive UI/UX
                    design and seamless user experiences.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </SummaryWrap>
      </PageContainer>
    </SummarySection>
  )
}

export default Summary
