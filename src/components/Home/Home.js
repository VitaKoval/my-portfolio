import React from 'react'
import { Flex, Img } from '@/ui'
import { IoLocationOutline } from 'react-icons/io5'
import { PiLinkedinLogoBold, PiTelegramLogoBold } from 'react-icons/pi'
import { MdOutlineMailOutline } from 'react-icons/md'
import {
  IntroWrapper,
  IntroBlockText,
  IntroBlockImg,
  IntroImage,
} from './Home.styled'
import WindowImage from '@/assets/images/intro_img.png'
import { Heading, Text } from '../../ui'

const Home = () => {
  return (
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
            interfaces. I strive to balance functionality, user-friendliness,
            and clean code in every project.
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
  )
}

export default Home
