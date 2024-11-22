import React from 'react'
import { Flex } from '@/ui'
import ProjectItem from './ProjectItem'

const ProjectList = () => {
  return (
    <Flex gap={6} wrap justifyContent="center">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </Flex>
  )
}

export default ProjectList
