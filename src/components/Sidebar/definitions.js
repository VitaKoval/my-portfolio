import { GrHomeRounded, GrProjects, GrTechnology } from 'react-icons/gr'
import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiTelegramLogoBold,
} from 'react-icons/pi'

export const sidebarItems = [
  {
    name: 'home',
    Icon: GrHomeRounded,
    path: '/',
  },
  {
    name: 'technologies',
    Icon: GrTechnology,
    path: '/tech',
  },
  {
    name: 'projects',
    Icon: GrProjects,
    path: '/projects',
  },
]

export const sidebarContactIcons = [
  {
    name: 'telegram',
    Icon: PiTelegramLogoBold,
    path: 'https://www.linkedin.com/in/vita-koval-dev/',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    name: 'linkedIn',
    Icon: PiLinkedinLogoBold,
    path: 'https://www.linkedin.com/in/vita-koval-dev/',
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    name: 'gitHub',
    Icon: PiGithubLogoBold,
    path: 'https://github.com/VitaKoval',
    target: '_blank',
    rel: 'noreferrer',
  },
]
