import React from 'react'
import { Flex, Heading, Text, PageContainer, AccentElement, Img } from '@/ui'
import { ContentWrapper, HeroSection } from './Hero.styled'
import { TbCurrentLocation } from 'react-icons/tb'

function Hero() {
  return (
    <HeroSection>
      <PageContainer>
        <ContentWrapper>
          <Heading variant="h1" styledColor="gradient">
            Vita Koval. <br />
            Front-End Developer
          </Heading>
          <Text>
            I enjoy transforming <strong>ideas into code</strong> and code into{' '}
            <strong>interactive interfaces.</strong> I strive to balance{' '}
            <strong>functionality</strong>, user-friendliness, and{' '}
            <strong>clean code</strong> in every project.
          </Text>

          <Flex variant="center" gap="8px">
            <TbCurrentLocation />
            <Text variant="monoReg">Based in Calgary, AB, Canada</Text>
          </Flex>
        </ContentWrapper>
      </PageContainer>
    </HeroSection>
  )
}

export default Hero
