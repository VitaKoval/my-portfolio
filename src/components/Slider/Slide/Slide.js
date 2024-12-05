import React from 'react'
import { Img, Text, Flex } from '@/ui'
import { SLIDE_WIDTH } from '../Slider'
import { SliderItem } from '../Slider.styled'

const Slide = ({ isLastSlide, title, img, type, ...props }) => {
  return (
    <SliderItem
      as="li"
      slideWidth={isLastSlide ? '100%' : `${SLIDE_WIDTH}px`}
      type={type}
    >
      {!isLastSlide ? (
        <Img src={img} alt="Project image" variant="contain" />
      ) : (
        <Flex flex="1" alignItems="center">
          <Text>...to be continued</Text>
        </Flex>
      )}

      <Text fontWeight="bold" textAlign="center">
        {title}
      </Text>
    </SliderItem>
  )
}

export default Slide
