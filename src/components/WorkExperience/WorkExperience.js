import React from 'react'
import { PageContainer, Heading, Text, Flex, Img, Box } from '@/ui'
import { WorkExperienceSection } from './WorkExperience.styled'
import ImgWorkPlace from '../../assets/images/place_1.jpg'
import ImgWorkPlaceSecond from '../../assets/images/place_2.jpg'

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
          {/* <Flex width="40%">
            <Flex borderRadius="sm" overflow="hidden" column gap={2}>
              <Img src={ImgWorkPlaceSecond} alt="work place" variant="cover" />
              <Img src={ImgWorkPlace} alt="work place" variant="cover" />
            </Flex>
          </Flex> */}
        </Flex>
      </PageContainer>
    </WorkExperienceSection>
  )
}

export default WorkExperience
