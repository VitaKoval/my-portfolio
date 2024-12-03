import React from 'react'
import { Flex, Img, Button } from '@/ui'
import { SliderWrapper, SliderContainer, SliderItem } from './Slider.styled'
import Scrollbar from './Scrollbar'

const Slider = ({ slides }) => {
  return (
    <>
      <SliderWrapper>
        <SliderContainer as="ul">
          {slides.map(({ title, img }) => (
            <SliderItem as="li" key={title}>
              <Img src={img} alt="Project image" variant="cover" />

              {title}
            </SliderItem>
          ))}
        </SliderContainer>
      </SliderWrapper>
      <Scrollbar />
    </>
  )
}

export default Slider
