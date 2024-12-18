import React from 'react'
import { Flex, Img, Heading, Text, Box, AccentElement } from '@/ui'
import { ExperienceListWrap, TextEditorStyled } from '../WorkExperience.styled'
import { experience } from '../definitions'

const ExperienceItem = ({
  company,
  employmentType,
  position,
  link,
  img,
  description,
  startDate,
  endDate,
  locationType,
}) => {
  return (
    <Flex gap={4}>
      <Box as="a" href={link} target="_blanc" width="48px" height="48px">
        <Img src={img} alt="logo company" variant="contain" />
      </Box>

      <Flex column gap={3} flex={1}>
        <Flex column gap={1}>
          <Heading variant="h4">{position}</Heading>
          <Text>
            {company} · {employmentType}
          </Text>
          <Text color="text.tertiary">
            {startDate} - {endDate} · 1 yr 4 mos
          </Text>
          <Text color="text.tertiary">{locationType}</Text>
        </Flex>
        {description && (
          <TextEditorStyled dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </Flex>
    </Flex>
  )
}

const ExperienceList = () => {
  if (!experience) return
  return (
    <ExperienceListWrap>
      {experience.map(({ id, ...data }) => (
        <ExperienceItem key={id} {...data} />
      ))}
    </ExperienceListWrap>
  )
}

export default ExperienceList
