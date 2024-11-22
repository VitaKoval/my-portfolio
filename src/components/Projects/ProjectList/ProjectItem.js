import React from 'react'
import { Flex, Img, Text, Badge } from '@/ui'
import { ProjectImageContainer, ProjectItemContainer } from '../Projects.styled'

const ProjectItem = () => {
  return (
    <ProjectItemContainer>
      <ProjectImageContainer as="a" href="my-portfolio/project">
        <Img
          variant="contain"
          src="https://res.cloudinary.com/monday-blogs/w_1000,h_599,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2023/03/project-management-dashboard-example.png"
          alt="project image"
        />
      </ProjectImageContainer>
      <Flex wrap gap={1}>
        <Badge />
        <Badge />
        <Badge />
        <Badge />
      </Flex>
      <Flex column gap={3}>
        <Text variant="body24b">Name</Text>
        <Text>
          Safeguard your operations against regulatory pitfalls with proactive
          insights and automated compliance updates that keep pace with the
          fast-evolving financial landscape.
        </Text>
      </Flex>
    </ProjectItemContainer>
  )
}

export default ProjectItem
