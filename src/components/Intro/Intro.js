import React from 'react'
import { Flex, Heading, Text, PageContainer } from '@/ui'
import { IoLocationOutline } from 'react-icons/io5'
import {
  IntroWrapper,
  IntroBlockText,
  IntroBlockImg,
  IntroImage,
  IntroSection,
  IntroBgImage,
} from './Intro.styled'
import WindowImage from '@/assets/images/intro_img.png'

const Intro = () => {
  return (
    <IntroSection>
      <IntroBgImage />
      <PageContainer>
        <IntroWrapper>
          <IntroBlockText>
            <Flex column gap={6}>
              <Heading variant="h1" secondary="true">
                <Heading as="span" variant="h1" color="text.active">
                  Vita Koval.
                </Heading>{' '}
                Front-End Developer
              </Heading>
              <Text>
                I enjoy transforming ideas into code and code into interactive
                interfaces. I strive to balance functionality,
                user-friendliness, and clean code in every project.
              </Text>
              <Flex gap={1} alignItems="center">
                <IoLocationOutline size={25} />
                <Text>Based in Calgary, AB, Canada</Text>
              </Flex>
            </Flex>
          </IntroBlockText>
          <IntroBlockImg>
            <IntroImage src={WindowImage} alt="WindowImage" />
          </IntroBlockImg>
        </IntroWrapper>
      </PageContainer>
    </IntroSection>
  )
}

export default Intro
