import React from 'react'
import { Flex, Heading, Text, PageContainer, AccentElement, Img } from '@/ui'
import {
  IntroWrapper,
  IntroBlockText,
  IntroBlockImg,
  IntroImage,
  IntroSection,
  IntroBgImage,
} from './Intro.styled'
import WindowImage from '@/assets/images/intro_img.png'
import Location from '../../ui/icon/Location'

const Intro = () => {
  return (
    <IntroSection>
      <IntroBgImage />
      <PageContainer>
        <IntroWrapper>
          <IntroBlockText>
            <Flex column gap={6}>
              <Heading variant="h1" secondary="true">
                <Heading as="span" variant="h1" color="text.headline">
                  <AccentElement>Vita Koval.</AccentElement>
                </Heading>{' '}
                Front-End Developer
              </Heading>
              <Text>
                I enjoy transforming ideas into code and code into interactive
                interfaces. I strive to balance functionality,
                user-friendliness, and clean code in every project.
              </Text>
              <Flex alignItems="center" ml="-12px">
                <Location width="38px" />
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
