import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  ContentToggleWrapper,
  VisibleContentContainer,
  HiddenContentContainer,
  HiddenContent,
  ToggleButton,

  /**
   * ContentToggle is a UI component that displays visible content and optionally hides
   * additional content behind a toggleable section. When the "More" button is clicked,
   * the hidden content is revealed; clicking "Less" collapses it.
   *
   * @component
   *
   * @param {React.ReactElement|React.ReactElement[]} visibleContent - Content that is always shown.
   * @param {React.ReactElement|React.ReactElement[]} [hiddenContent] - Optional content shown when toggled.
   *
   * @example
   * <ContentToggle
   *   visibleContent={<p>Short preview</p>}
   *   hiddenContent={<p>Full details revealed on toggle</p>}
   * />
   */
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
      {hiddenContent && (
        <ToggleButton onClick={handleToggle}>
          {isVisible ? 'Less' : 'More'}
        </ToggleButton>
      )}
      <HiddenContentContainer style={{ height: hiddenContentHeight }}>
        {isVisible && (
          <HiddenContent ref={contentRef}>{hiddenContent}</HiddenContent>
        )}
      </HiddenContentContainer>
    </ContentToggleWrapper>
  )
}

ContentToggle.propTypes = {
  visibleContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,

  hiddenContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default ContentToggle
