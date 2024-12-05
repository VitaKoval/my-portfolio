import React, { useCallback, useMemo } from 'react'
import { Chevron } from '@/ui/icon'
import { ScrollbarButton, ScrollbarContainer } from './SlideBar.styled'
import { SLIDER_GAP, SLIDE_WIDTH } from '../Slider'

const scrollToSlide = (slider = null, slideIndex) => {
  if (!slider) return

  slider.scrollTo({
    left: slideIndex * (SLIDE_WIDTH + SLIDER_GAP),
    behavior: 'smooth',
  })
}

const SlideBar = ({ sliderRef, currentSlide }) => {
  const { isFirstSlide, isLastSlide } = useMemo(() => {
    const totalSlides = sliderRef.current?.children.length

    return {
      isFirstSlide: currentSlide === 0,
      isLastSlide: totalSlides - 1 === currentSlide, // Check the last slide, considering that we added 2 empty slides for the visibility of the last one.
    }
  }, [currentSlide, sliderRef])

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1)
  }, [currentSlide])

  const goToPrevSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1)
  }, [currentSlide])

  return (
    <ScrollbarContainer>
      <ScrollbarButton onClick={goToPrevSlide} disabled={isFirstSlide}>
        <Chevron direction="left" width="24px" height="24px" />
      </ScrollbarButton>
      <ScrollbarButton onClick={goToNextSlide} disabled={isLastSlide}>
        <Chevron width="24px" height="24px" />
      </ScrollbarButton>
    </ScrollbarContainer>
  )
}

export default SlideBar
