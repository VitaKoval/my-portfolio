import React from 'react'
import { Flex, Img, Text, Badge, Box } from '@/ui'
import { ProjectImageContainer, ProjectItemContainer } from '../Projects.styled'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BrowserTop from '../../../assets/images/bridge-browser-top.png'

const ProjectItem = ({ title, subtitle, image, technologies, path, link }) => {
  return (
    <ProjectItemContainer>
      {/* <NavLink to={path}>
        <ProjectImageContainer>
          <Img variant="contain" src={image} alt="project image" />
        </ProjectImageContainer>
      </NavLink> */}
      <Flex column>
        <Img src={BrowserTop} alt="bridge-browser-top" />
        <Box width="100%" height="100%">
          <Img src={image} alt="project image" variant="contain" />
        </Box>
      </Flex>

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
          {technologies?.map((item, idx) => (
            <Badge key={idx} title={item} />
          ))}
        </Flex>
      )}
    </ProjectItemContainer>
  )
}

export default ProjectItem
