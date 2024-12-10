import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { PageContainer, Flex, Text, Heading, Badge } from '@/ui'
import SoliticsImg from '@/assets/images/solitics-intro.png'
import {
  ActionButton,
  BgImage,
  ContentContainer,
  ImageContainer,
  ImageStyle,
  SectionWrapper,
  TextContainer,
} from './SoliticsPage.styled'
import ContentSection from '../../components/ContentSection'

const contentData = {
  id: 'solitics',
  title: 'Solitics Website',
  subtitle:
    'Solitics is a website project I worked on during my time at Wogi. In this project, I was responsible for various development aspects, including creating and optimizing website sections, implementing animations, and ensuring feedback form.',
  img: SoliticsImg,
  link: 'https://solitics.com/',
  technologies: [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'WordPress',
    'PHP',
    'jQuery',
  ],
  isReverse: true,
  sections: [
    {
      id: 'about',
      type: 'default',
      //   title: 'Create sections',
      textHTML: `<h3>Description</h3>
          <p> This project I realize when I work in Wogi.I play key role in develop sections, animations, and implement feedback form</p>
          <ul><li>Item list</li><li>Item list</li><li>Item list</li></ul>`,
      img: SoliticsImg,
    },
    {
      id: 'murcup',
      type: 'default',
      //   title: 'Create sections',
      textHTML: `<h3>Description</h3>
          <p> This project I realize when I work in Wogi.I play key role in develop sections, animations, and implement feedback form</p>`,
      img: SoliticsImg,
    },
  ],
}

const SoliticsPage = () => {
  const navigate = useNavigate()
  const {} = contentData

  const sectionsData = useMemo(() => {
    return contentData.sections.map((section, index) => ({
      ...section,
      isReverse: index % 2 !== 0,
    }))
  }, [contentData])

  console.log(sectionsData)

  return (
    <>
      <ContentSection type="intro" contentData={contentData} />
      {sectionsData.map(({ id, ...sectionData }) => (
        <ContentSection key={id} contentData={sectionData} />
      ))}
    </>
  )
  // <SectionWrapper>
  //   <BgImage />
  //   <PageContainer>
  //     <ContentContainer>
  //       <TextContainer>
  //         <Flex column gap={6}>
  //           <ActionButton
  //             onClick={() => navigate(-1, { withoutConfirm: true })}
  //           >
  //             {`<<<----`} back
  //           </ActionButton>
  //           <Heading variant="h1" secondary="true">
  //             Solitics Website
  //           </Heading>
  //           <Text>Subtitle</Text>
  //           {contentData[0]?.technologies && (
  //             <Flex wrap gap={1} width="80%">
  //               {contentData[0]?.technologies?.map((item, idx) => (
  //                 <Badge key={idx} title={item} />
  //               ))}
  //             </Flex>
  //           )}
  //         </Flex>
  //       </TextContainer>
  //       <ImageContainer>
  //         <ImageStyle src={SoliticsImg} alt="Project Image" />
  //       </ImageContainer>
  //     </ContentContainer>
  //   </PageContainer>
  // </SectionWrapper>
}

export default SoliticsPage
