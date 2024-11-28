import React from 'react'
import { Flex, Box, PageContainer, Heading, Button } from '@/ui'
import ProjectList from './ProjectList'
import { ProjectSection } from './Projects.styled'

const Projects = () => {
  return (
    <ProjectSection>
      <PageContainer>
        <Flex column gap="84px" flex={1}>
          <Flex flex={1} gap={6} justifyContent="space-between">
            <Box maxWidth="29.688rem">
              <Heading variant="h3">
                Here are a few of my favorite projects
              </Heading>
            </Box>

            <Button
              as="a"
              href="https://github.com/VitaKoval?tab=repositories"
              target="_blank"
              title="More in GitHub"
            />
          </Flex>
          <ProjectList />
        </Flex>
      </PageContainer>
    </ProjectSection>
  )
}

export default Projects
