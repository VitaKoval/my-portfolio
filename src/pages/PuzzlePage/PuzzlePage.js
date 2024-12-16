import React, { useMemo } from 'react'
import { ContentSection } from '../../components'
import { contentData } from './definitions'

const PuzzlePage = () => {
  const sectionsData = useMemo(() => {
    return contentData.sections.map((section, index) => ({
      ...section,
      isReverse: index % 2 !== 0,
    }))
  }, [contentData])

  return (
    <>
      <ContentSection contentData={contentData} />
      {sectionsData.map(({ id, ...sectionData }) => (
        <ContentSection key={id} contentData={sectionData} />
      ))}
    </>
  )
}

export default PuzzlePage
