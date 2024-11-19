import React from 'react'
import { Flex } from '../../ui'
import { IoLocationOutline } from 'react-icons/io5'
import { PiLinkedinLogoBold, PiTelegramLogoBold } from 'react-icons/pi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IntroWrapper, IntroBlockText, IntroBlockImg } from './Home.styled'

const Home = () => {
  return (
    <IntroWrapper>
      <IntroBlockText>
        <Flex column gap={6}>
          <h1>Vita Koval. Front Ent Developer</h1>
          <p>
            I enjoy transforming ideas into code and code into interactive
            interfaces. I strive to balance functionality, user-friendliness,
            and clean code in every project.
          </p>
          <Flex gap={1}>
            <IoLocationOutline />
            <p>Based in Calgary, AB, Canada</p>
          </Flex>
        </Flex>
        <Flex gap={4}>
          <a target="_blank" rel="noreferrer">
            <PiTelegramLogoBold size={24} />
          </a>
          <a>
            <PiLinkedinLogoBold size={24} />
          </a>
          <a>
            <MdOutlineMailOutline size={24} />
          </a>
        </Flex>
      </IntroBlockText>
      <IntroBlockImg>IMAGE</IntroBlockImg>
    </IntroWrapper>
  )
}

export default Home
