import React, { useMemo } from 'react'
import { ContentSection } from '@/components'
import { contentData } from './definitions'
import { ScrollRestoration } from 'react-router-dom'

const SoliticsPage = () => {
  const sectionsData = useMemo(() => {
    return contentData.sections.map((section, index) => ({
      ...section,
      isReverse: index % 2 !== 0,
    }))
  }, [contentData])

  return (
    <>
      <ScrollRestoration />
      <ContentSection contentData={contentData} />
      {sectionsData.map(({ id, ...sectionData }) => (
        <ContentSection key={id} contentData={sectionData} />
      ))}
    </>
  )
}

export default SoliticsPage
