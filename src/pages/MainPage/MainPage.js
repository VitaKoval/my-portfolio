import React from 'react'
import {
  Hero,
  Intro,
  Technologies,
  Projects,
  Summary,
  WorkExperience,
  Overview,
} from '@/components'
import { Flex, Paper, Box } from '@/ui'

const MainPage = () => {
  return (
    <>
      <Hero />
      {/* <Intro /> */}
      {/* <Technologies /> */}
      {/* <Projects /> */}
      {/* <Flex px={4} column>
        <Paper variant="section" px={10}>
          <Summary />
          <WorkExperience />
          <Paper variant="block" mb="-264px">
            <Overview />
          </Paper>
        </Paper>
      </Flex> */}
      {/* <Box height="364px"></Box> */}
    </>
  )
}

export default MainPage
