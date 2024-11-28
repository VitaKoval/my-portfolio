import React from 'react'
import { Flex, Img, Text, Badge } from '@/ui'
import { ProjectImageContainer, ProjectItemContainer } from '../Projects.styled'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const ProjectItem = ({ title, subtitle, image, technologies, path, link }) => {
  return (
    <ProjectItemContainer>
      <NavLink to={path}>
        <ProjectImageContainer>
          <Img variant="contain" src={image} alt="project image" />
        </ProjectImageContainer>
      </NavLink>

      <Flex column gap={3}>
        {title && (
          <Flex gap={2} alignItems="center">
            <Text variant="body24b">{title}</Text>
            <Link to={link} target="_blank">
              <FaExternalLinkAlt size={16} color="#003087" cursor="pointer" />
            </Link>
          </Flex>
        )}
        {subtitle && <Text>{subtitle}</Text>}
      </Flex>
      {technologies && (
        <Flex wrap gap={1}>
          {technologies?.map((item) => (
            <Badge title={item} />
          ))}
        </Flex>
      )}
    </ProjectItemContainer>
  )
}

export default ProjectItem
