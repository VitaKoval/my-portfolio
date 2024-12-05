import React, { useMemo, useRef, useState } from 'react'
import { Img } from '@/ui'
import { SliderWrapper, SliderContainer, SliderItem } from './Slider.styled'
import Scrollbar from './SlideBar'

export const SLIDER_WIDTH = 500 // Value should be in pixels (px)
export const SLIDER_GAP = 20 // Value should be in pixels (px)

const Slider = ({ slides }) => {
  if (!slides) return

  const sliderRef = useRef(null)
  const [sliderPosition, setSliderPosition] = useState(0)

  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (SLIDER_WIDTH + SLIDER_GAP))
  }, [sliderPosition])

  const handleScroll = (evt) => {
    setSliderPosition(evt.currentTarget.scrollLeft)
  }
  return (
    <>
      <SliderWrapper>
        <SliderContainer
          as="ul"
          ref={sliderRef}
          onScroll={handleScroll}
          sliderGap={SLIDER_GAP}
        >
          {slides.map(({ title, img }, index) => (
            <SliderItem
              as="li"
              key={title}
              sliderWidth={
                slides.length - 1 === index ? '100%' : `${SLIDER_WIDTH}px`
              }
            >
              <Img src={img} alt="Project image" variant="cover" />
              {title}
            </SliderItem>
          ))}
        </SliderContainer>
      </SliderWrapper>
      <Scrollbar sliderRef={sliderRef} currentSlide={currentSlide} />
    </>
  )
}

export default Slider
