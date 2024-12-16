import React from 'react'
import { Img, Text, Flex } from '@/ui'
import { SLIDE_WIDTH } from '../Slider'
import { SliderItem } from '../Slider.styled'

const Slide = ({ onClick, isLastSlide, id, title, img, type, ...props }) => {
  return (
    <SliderItem
      as="li"
      slideWidth={isLastSlide ? '100%' : `${SLIDE_WIDTH}px`}
      type={type}
      onClick={() => onClick(id)}
    >
      {!isLastSlide ? (
        <Img src={img} alt="Project image" variant="contain" />
      ) : (
        <Flex flex="1">
          <Text>...to be continued</Text>
        </Flex>
      )}

      <Text fontWeight="bold">{title}</Text>
    </SliderItem>
  )
}

export default Slide
