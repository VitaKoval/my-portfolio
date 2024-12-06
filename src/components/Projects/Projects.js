import React from 'react'
import { Flex, Box, PageContainer, Heading, Button } from '@/ui'
import ProjectList from './ProjectList'
import { ProjectSection } from './Projects.styled'
import { Slider } from '@/components'
import SoliticsImg from '@/assets/images/projects/solitics-intro.png'
import PuzzleImg from '@/assets/images/projects/puzzle-intro.png'

// img
// import SoliticsImg from '@/assets/images/Projects/solitics-intro.png'

const slides = [
  {
    title: 'Solitics Website',
    img: SoliticsImg,
  },
  {
    title: 'Puzzle (event app)',
    img: PuzzleImg,
  },
  { title: 'Storybook', img: PuzzleImg },
  // { title: 'My Portfolio' },
  // { title: 'Then...' },
]

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
          <Slider slides={slides} />
          <ProjectList />
        </Flex>
      </PageContainer>
    </ProjectSection>
  )
}

export default Projects
