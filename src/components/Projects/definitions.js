import SoliticsImgIntro from '../../assets/images/Projects/solitics-intro.png'
import PuzzleImgIntro from '../../assets/images/Projects/puzzle-intro-1.png'

// props from ProjectItem ===>>> [{ path, title, subtitle, image, link, technologies }]

export const projectsList = [
  {
    path: '/my-portfolio/solitics-website',
    title: 'Solitics website',
    subtitle: '',
    image: SoliticsImgIntro,
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
  },
  {
    path: '/my-portfolio/pazzle-app',
    title: 'Puzzle (event app)',
    subtitle: '',
    image: PuzzleImgIntro,
    link: 'https://wogi.io/puzzle-room/register/10',
    technologies: [
      'React',
      'Styled-Components',
      'Axios',
      'TanStack Query',
      'PropTypes',
      'Recoil',
    ],
  },
  {
    path: '/my-portfolio/solitics-website',
    title: '',
    subtitle: '',
    image: '',
    link: '',
    technologies: [],
  },
]
