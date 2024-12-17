import React from 'react'
import { Img, Text, Flex } from '@/ui'
import { SLIDE_WIDTH } from '../Slider'
import { LinkList, SliderItem, TechnologiesList } from '../Slider.styled'
import { Badge, Box } from '@/ui'
import { FaExternalLinkSquareAlt, FaGithubSquare } from 'react-icons/fa'

const Slide = ({
  onClick,
  isLastSlide,
  id,
  title,
  img,
  type,
  technologies,
  link,
  gitHubLink,
  ...props
}) => {
  return (
    <SliderItem
      as="li"
      slideWidth={isLastSlide ? '100%' : `${SLIDE_WIDTH}px`}
      type={type}
      onClick={() => onClick(id)}
    >
      <Flex column position="relative">
        {!isLastSlide ? (
          <Img src={img} alt="Project image" variant="contain" />
        ) : (
          <Flex mr="auto" flex={1} alignItems="center">
            <Text>...to be continued</Text>
          </Flex>
        )}
        {technologies && (
          <TechnologiesList wrap gap={2}>
            {technologies.map((tech) => (
              <Badge title={tech} />
            ))}
          </TechnologiesList>
        )}
        {(link || gitHubLink) && (
          <LinkList>
            <Flex>
              <FaExternalLinkSquareAlt />
            </Flex>
            <Flex>
              <FaGithubSquare />
            </Flex>
          </LinkList>
        )}
      </Flex>

      <Text fontWeight="bold">{title}</Text>
    </SliderItem>
  )
}

export default Slide
