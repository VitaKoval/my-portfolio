import React, { useMemo, useRef, useState } from 'react'
import { SliderWrapper, SliderContainer } from './Slider.styled'
import SlideBar from './SlideBar'
import Slide from './Slide'

export const SLIDE_WIDTH = 500 // Value should be in pixels (px)
export const SLIDER_GAP = 20 // Value should be in pixels (px)

const Slider = ({ slides }) => {
  if (!slides) return

  const sliderRef = useRef(null)
  const [sliderPosition, setSliderPosition] = useState(0)

  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (SLIDE_WIDTH + SLIDER_GAP))
  }, [sliderPosition])

  const slidesList =
    slides.length >= 2
      ? [...slides, { title: '', img: '', type: 'empty' }]
      : slides

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
          {slidesList?.map(({ title, ...props }, index) => (
            <Slide
              key={title}
              isLastSlide={slidesList.length - 1 === index}
              title={title}
              {...props}
            />
          ))}
        </SliderContainer>
      </SliderWrapper>
      <SlideBar sliderRef={sliderRef} currentSlide={currentSlide} />
    </>
  )
}

export default Slider
