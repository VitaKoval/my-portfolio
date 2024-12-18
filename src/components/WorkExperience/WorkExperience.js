import React from 'react'
import { PageContainer, Heading, Text, Flex, Img, Box } from '@/ui'
import { WorkExperienceSection } from './WorkExperience.styled'

import ExperienceList from './ExperienceList'

const WorkExperience = () => {
  return (
    <WorkExperienceSection>
      <PageContainer>
        <Flex gap={8}>
          <Flex width="100%" column gap={24}>
            <Flex column gap={4}>
              <Heading variant="h3">Work Experience</Heading>
              <Box>
                <Text>
                  Here is my <b>experience as a Front-End Developer</b>.
                </Text>
                <Text>
                  In addition, I bring valuable skills from other fields, which
                  enhance my problem-solving, communication, and project
                  management abilities.
                </Text>
              </Box>
            </Flex>
            <ExperienceList />
          </Flex>
        </Flex>
      </PageContainer>
    </WorkExperienceSection>
  )
}

export default WorkExperience
