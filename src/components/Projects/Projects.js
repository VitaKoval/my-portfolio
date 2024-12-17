import React from 'react'
import { Flex, Box, PageContainer, Heading, Button } from '@/ui'
import ProjectList from './ProjectList'
import { ProjectSection } from './Projects.styled'
import { Slider } from '@/components'
import SoliticsImg from '@/assets/images/solitics-intro.png'
import PuzzleImg from '@/assets/images/puzzle-intro.png'
import { useNavigate } from 'react-router-dom'

// img
// import SoliticsImg from '@/assets/images/Projects/solitics-intro.png'

const PROJECT_PATH = '/my-portfolio/:id'

const slides = [
  {
    id: 'solitics',
    title: 'Solitics Website',
    img: SoliticsImg,
    link: 'https://solitics.com/',
    gitHubLink: '',
    technologies: [
      'HTML',
      'CSS',
      'SASS',
      'JavaScript',
      'WordPress',
      'PHP',
      'jQuery',
    ],
  },
  {
    id: 'puzzle',
    title: 'Puzzle (event app)',
    img: PuzzleImg,
    technologies: [
      'React',
      'Styled-Components',
      'Axios',
      'TanStack Query',
      'PropTypes',
      'Recoil',
    ],
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    img: '',
  },
  {
    id: 'portfolio',
    title: 'My Portfolio',
    img: '',
  },
  // { title: 'Then...' },
]

const Projects = () => {
  const navigate = useNavigate()

  const handleSlideNavigate = (id) => {
    navigate(PROJECT_PATH.replace(':id', id), {
      withoutConfirm: true,
    })
  }
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
          <Slider slides={slides} onClick={handleSlideNavigate} />
          {/* <ProjectList /> */}
        </Flex>
      </PageContainer>
    </ProjectSection>
  )
}

export default Projects
