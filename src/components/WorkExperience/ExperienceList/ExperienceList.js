import React from 'react'
import { Flex, Img, Heading, Text, Box, AccentElement } from '@/ui'
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
          <Text color="text.headline">Application Development</Text>
          <Flex as="ul" column gap={1}>
            <Text as="li">
              <b>Built and launched scalable React and Next.js applications</b>,
              improving project delivery speed and code maintainability, which
              resulted in higher team productivity.
            </Text>
            <Text as="li">
              <b>Developed applications from scratch</b> using modern frameworks
              like React and Next.js, solving business challenges by creating
              custom, high-performance user interfaces.
            </Text>
            <Text as="li">
              <b>Worked with REST APIs</b>, handling data processing and{' '}
              <b>optimizing API requests</b> to ensure smoother data integration
              and a more reliable user experience.
            </Text>
            <Text as="li">
              <b>Created reusable components</b> that reduced development time
              for future projects, improving overall team efficiency.
            </Text>
          </Flex>
          <Text color="text.headline">Website Development & Support</Text>
          <Flex as="ul" column gap={3} flex={1}>
            <Text as="li">
              <b>Collaborated with cross-functional teams</b> to ensure that
              website features were aligned with business goals, contributing to
              improved project delivery timelines.
            </Text>
            <Text as="li">
              <b>
                Created pixel-perfect, responsive, and user-friendly layouts
              </b>{' '}
              using semantic HTML5, CSS3, and JavaScript, ensuring seamless
              cross-browser compatibility and optimal performance across all
              devices, while adhering to best practices for accessibility and
              SEO.
            </Text>
            <Text as="li">
              <b>
                Developed and integrated custom features for WordPress sites
              </b>
              , enhancing user experience and providing tailored solutions to
              meet client needs.
            </Text>
            <Text as="li">
              <b>Troubleshot and resolved bugs</b>, addressing critical issues
              that impacted site functionality and user experience, minimizing
              downtime and improving overall reliability.
            </Text>
            <Text as="li">
              <b>Enhanced CRM integration</b> (e.g., HubSpot) to streamline
              client communication and automate workflows, improving client
              satisfaction and internal efficiency.
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
