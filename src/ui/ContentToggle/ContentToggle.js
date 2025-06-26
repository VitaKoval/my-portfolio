import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  ContentToggleWrapper,
  VisibleContentContainer,
  HiddenContentContainer,
  HiddenContent,
  ToggleButton,
} from './ContentToggle.styled'

function ContentToggle({ visibleContent, hiddenContent }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hiddenContentHeight, setHiddenContentHeight] = useState(0)
  const contentRef = useRef(null)

  const handleToggle = () => {
    setIsVisible((prev) => !prev)
  }

  useEffect(() => {
    isVisible
      ? setHiddenContentHeight(
          contentRef.current?.getBoundingClientRect().height,
        )
      : setHiddenContentHeight(0)
  }, [isVisible])

  return (
    <ContentToggleWrapper>
      <VisibleContentContainer>{visibleContent}</VisibleContentContainer>
      <HiddenContentContainer style={{ height: hiddenContentHeight }}>
        {isVisible && (
          <HiddenContent ref={contentRef}>{hiddenContent}</HiddenContent>
        )}
      </HiddenContentContainer>

      {hiddenContent && (
        <ToggleButton onClick={handleToggle}>
          {isVisible ? 'Show less' : 'Show more'}
        </ToggleButton>
      )}
    </ContentToggleWrapper>
  )
}

ContentToggle.propTypes = {}

export default ContentToggle
