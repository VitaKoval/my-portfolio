import React from 'react'
import { Flex, Img, Heading, Text, Box } from '@/ui'
import { ExperienceListWrap } from '../WorkExperience.styled'

const ExperienceList = () => {
  return (
    <ExperienceListWrap>
      <Flex gap={4}>
        <Box
          as="a"
          href="https://www.linkedin.com/company/wogi-digital-solutions"
          target="_blanc"
          width="48px"
          height="48px"
        >
          <Img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQF0aPVCIqrftw/company-logo_200_200/company-logo_200_200/0/1698676507641/wogi_digital_solutions_logo?e=1740614400&v=beta&t=32nDlto7MolYZokyd_NzVzMN4dPUog4_xvAvKedTadY"
            alt="logo company"
            variant="contain"
          />
        </Box>

        <Flex column gap={3} flex={1}>
          <Flex column gap={1}>
            <Heading variant="h4">Front End Developer</Heading>
            <Text>Wogi · Full-time</Text>
            <Text color="text.tertiary">Apr 2023 - Jul 2024 · 1 yr 4 mos</Text>
            <Text color="text.tertiary">Remote</Text>
          </Flex>
          <Flex as="ul" column gap={1}>
            <Text as="li">
              Developed and maintained web applications, creating reusable React
              components and designing user-friendly interfaces.
            </Text>
            <Text as="li">
              Worked with REST APIs and set up route structures to ensure
              efficient data flow and functionality.
            </Text>
            <Text as="li">
              Developed React applications from scratch and worked with existing
              ones, learning and using modern technologies.
            </Text>
            <Text as="li">
              Developed and supported WordPress projects, implementing new
              features and integrating CRMs like HubSpot.
            </Text>
            <Text as="li">
              Debugged and tested existing code, improving functionality and
              user experience.
            </Text>
            <Text as="li">
              Created and integrated complex animations to enhance visual appeal
              and user engagement.
            </Text>
            <Text as="li">
              Contributed to documentation aimed at enhancing user experience
              and collaborated with cross-functional teams.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={4}>
        <Box
          as="a"
          href="https://www.linkedin.com/company/wogi-digital-solutions"
          target="_blanc"
          width="48px"
          height="48px"
          border="1px solid"
        >
          <Img
            src="https://static.vecteezy.com/system/resources/thumbnails/014/393/969/small_2x/startup-success-arrow-cursor-up-right-direction-overlap-overlapping-colorful-logo-design-vector.jpg"
            alt="logo company"
            variant="contain"
          />
        </Box>

        <Flex column gap={3} flex={1}>
          <Flex column gap={1}>
            <Heading variant="h4">Front End Developer</Heading>
            <Text>Startup (Wishable project) · Part-time</Text>
            <Text color="text.tertiary">Dec 2022 - Feb 2023 · 3 mos</Text>
            <Text color="text.tertiary">Remote</Text>
          </Flex>
          <Flex as="ul" column gap={1}>
            <Text as="li">
              Worked on new product features: adding items user flow, auth flow
              for mobile version, getting and displaying friends wishlist items.
            </Text>
            <Text as="li">
              Built new screens and components, integrated them with the
              backend.
            </Text>
            <Text as="li">
              Re-implementing screens and functionality from web on mobile.
            </Text>
            <Text as="li">
              Participated in product development sessions and estimation
              process.
            </Text>
            <Text>
              Technologies: JS, React, React Native, Android Studio, Xcode,
              Expo, Node.js, ExpressJS.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </ExperienceListWrap>
  )
}

export default ExperienceList
