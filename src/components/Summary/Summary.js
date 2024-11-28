import React, { useMemo } from 'react'
import { PageContainer, Flex, Text, Heading, Box } from '@/ui'
import {
  SkillItem,
  SkillItemContent,
  SkillsList,
  SummarySection,
  SummaryWrap,
} from './Summary.styled'
import SummaryItem from './SummaryItem/SummaryItem'
import { skillsList } from './definitions'

const Summary = () => {
  const websiteSkills = useMemo(() => {
    return skillsList.filter(({ type }) => type === 'website')
  }, [skillsList])

  const appSkills = useMemo(() => {
    return skillsList.filter(({ type }) => type === 'app')
  }, [skillsList])

  return (
    <SummarySection>
      <PageContainer>
        <SummaryWrap>
          <SkillItem>
            <SkillItemContent>
              <Heading>Website</Heading>
              <Text>Development & Support</Text>
            </SkillItemContent>
          </SkillItem>
          <SkillItem>
            <SkillItemContent>
              <Heading>App</Heading>
              <Text>Development & Optimization</Text>
            </SkillItemContent>
          </SkillItem>
          <SkillItem>
            <SkillItemContent>
              <Heading>UI / UX</Heading>
              <Text>Design & Implementation</Text>
            </SkillItemContent>
          </SkillItem>
          <SkillItem>
            <SkillItemContent>
              <Heading>API</Heading>
              <Text>
                Integration & <br /> Data Processing
              </Text>
            </SkillItemContent>
          </SkillItem>

          {/* <Flex gap={8} flex={1}>
            <SkillsList width="50%">
              <Heading variant="h3">Website Development</Heading>
              <Flex column gap={4}>
                {websiteSkills.length &&
                  websiteSkills.map((skill, idx) => (
                    <SummaryItem key={idx} {...skill} />
                  ))}
              </Flex>
            </SkillsList>
            <Box width="1px" bg="white" />
            <SkillsList width="50%">
              <Heading variant="h3">Application Development</Heading>
              <Flex column gap={4}>
                {appSkills.length &&
                  appSkills.map((skill, idx) => (
                    <SummaryItem key={idx} {...skill} />
                  ))}
              </Flex>
            </SkillsList>
          </Flex> */}
        </SummaryWrap>
      </PageContainer>
    </SummarySection>
  )
}

export default Summary
