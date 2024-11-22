import React from 'react'
import { Flex, PageContainer, Heading, Button } from '@/ui'
import ProjectList from './ProjectList'
import { ProjectSection } from './Projects.styled'

const Projects = () => {
  return (
    <ProjectSection>
      <PageContainer>
        <Flex column gap="84px" flex={1}>
          <Flex flex={1} gap={6} justifyContent="space-between">
            <Heading variant="h3" maxWidth="475px">
              Here are a few of my favorite projects
            </Heading>
            <Button title="More projects" />
          </Flex>
          <ProjectList />
        </Flex>
      </PageContainer>
    </ProjectSection>
  )
}

export default Projects
