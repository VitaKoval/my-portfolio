import React from 'react'
import { PageContainer, Heading, Text, Flex, Img, Box } from '@/ui'
import { WorkExperienceSection } from './WorkExperience.styled'
import ImgWorkPlace from '../../assets/images/christina-wocintechchat.jpg'
import ExperienceList from './ExperienceList'

const WorkExperience = () => {
  return (
    <WorkExperienceSection>
      <PageContainer>
        <Flex gap={8}>
          <Flex width="60%" column gap={24}>
            <Flex column gap={4}>
              <Heading variant="h3">Work Experience</Heading>
              <Text>
                Perform a comprehensive compliance assessment for your
                disclosures and policies delivering precise updates and
                recommendations to you seconds.
              </Text>
            </Flex>
            <ExperienceList />
          </Flex>
          <Flex width="40%">
            <Box borderRadius="16px" overflow="hidden">
              <Img src={ImgWorkPlace} alt="work place" variant="contain" />
            </Box>
          </Flex>
        </Flex>
      </PageContainer>
    </WorkExperienceSection>
  )
}

export default WorkExperience
