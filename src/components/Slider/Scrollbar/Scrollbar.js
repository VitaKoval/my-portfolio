import React, { useCallback } from 'react'
import { Chevron } from '@/ui/icon'
import { ScrollbarButton, ScrollbarContainer } from './Scrollbar.styled'
import { SLIDER_GAP, SLIDER_WIDTH } from '../Slider'

const scrollToSlide = (slider = null, slideIndex) => {
  if (!slider) return

  slider.scrollTo({
    left: slideIndex * (SLIDER_WIDTH + SLIDER_GAP),
    behavior: 'smooth',
  })
}

const Scrollbar = ({ sliderRef, currentSlide }) => {
  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1)
  }, [currentSlide])

  const goToPrevSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1)
  }, [currentSlide])

  console.log(sliderRef.current?.children.length)

  return (
    <ScrollbarContainer>
      <ScrollbarButton onClick={goToPrevSlide} disabled={currentSlide === 0}>
        <Chevron direction="left" width="24px" height="24px" />
      </ScrollbarButton>
      <ScrollbarButton onClick={goToNextSlide}>
        <Chevron width="24px" height="24px" />
      </ScrollbarButton>
    </ScrollbarContainer>
  )
}

export default Scrollbar
