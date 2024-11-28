import React from 'react'
import { Flex } from '@/ui'
import ProjectItem from './ProjectItem'
import { projectsList } from '../definitions'

const ProjectList = () => {
  return (
    <Flex gap={6} wrap justifyContent="center">
      {projectsList?.map(({ title, ...props }) => (
        <ProjectItem key={title} title={title} {...props} />
      ))}
    </Flex>
  )
}

export default ProjectList
