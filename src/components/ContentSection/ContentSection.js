import React, { useMemo } from 'react'
import {
  ActionButton,
  ContentContainer,
  ContentSectionBgImage,
  ContentSectionWrapper,
  ImageContainer,
  ImageStyle,
  LinkButton,
  TextContainer,
} from './ContentSection.styled'
import { PageContainer, Flex, Heading, Text, Badge } from '@/ui'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { FaLink } from 'react-icons/fa'

const ContentSection = ({ contentData, type }) => {
  const { id, title, subtitle, img, technologies, link, textHTML, isReverse } =
    contentData

  const navigate = useNavigate()
  console.log(contentData)
  // type = ['intro', 'default', 'reverse']

  return (
    <ContentSectionWrapper>
      {type === 'intro' && <ContentSectionBgImage />}
      <PageContainer>
        <ContentContainer isReverse={isReverse}>
          <TextContainer variant={type}>
            <Flex column gap={6}>
              {type === 'intro' && (
                <ActionButton
                  onClick={() => navigate(-1, { withoutConfirm: true })}
                >
                  <MdOutlineArrowBackIos /> <Text variant="body14r">Back</Text>{' '}
                </ActionButton>
              )}
              <Heading variant="h1" secondary="true">
                {title}
              </Heading>
              {subtitle && <Text>{subtitle}</Text>}
              {textHTML && (
                <Text dangerouslySetInnerHTML={{ __html: textHTML }} />
              )}
              {technologies && (
                <Flex wrap gap={1} width="80%">
                  {technologies?.map((item, idx) => (
                    <Badge key={idx} title={item} />
                  ))}
                </Flex>
              )}
              {type === 'intro' && (
                <LinkButton to="https://solitics.com/" target="_blank">
                  Link <FaLink />
                </LinkButton>
              )}
            </Flex>
          </TextContainer>
          {img && (
            <ImageContainer variant={type}>
              <ImageStyle src={img} alt="Project Image" />
            </ImageContainer>
          )}
        </ContentContainer>
      </PageContainer>
    </ContentSectionWrapper>
  )
}

export default ContentSection
