import React from 'react'
import { Flex, Heading, Text, Img } from '@/ui'
import {
  WorkSectionWrap,
  PreviewListContainer,
  PreviewItem,
  WorkActionsContainer,
} from './Work.styled'
import Item1 from '@/assets/images/puzzle-intro-1.png'
import { Button, ContentToggle, PageContainer } from '@/ui'

function Work(props) {
  return (
    <WorkSectionWrap>
      <PageContainer>
        <Flex variant="columnCenter" mb="80px">
          <Heading variant="h2" styledColor="gradient">
            What Have I Built?
          </Heading>
          <Text>
            Real projects, personal experiments, and interface ideas... All
            crafted with care and code.
          </Text>
        </Flex>
        <PreviewListContainer>
          <PreviewItem>
            <Img src={Item1} variant="cover" />
          </PreviewItem>
          <PreviewItem>
            <Img src={Item1} variant="cover" />
          </PreviewItem>
          <PreviewItem>
            <Img src={Item1} variant="cover" />
          </PreviewItem>
          <PreviewItem>
            <Img src={Item1} variant="cover" />
          </PreviewItem>
        </PreviewListContainer>
        <WorkActionsContainer variant="columnCenter">
          <Text>
            <strong>There’s</strong> more to discover.
            <br />
            Real <strong>projects</strong> and <strong>experiments</strong> I’d
            love to share.
          </Text>
          <Button size="big">See More Work</Button>
        </WorkActionsContainer>
      </PageContainer>
    </WorkSectionWrap>
  )
}

export default Work
