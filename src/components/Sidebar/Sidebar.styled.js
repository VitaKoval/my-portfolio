import styled from 'styled-components'
import { Flex } from '@/ui'
import css from '@styled-system/css'

export const SidebarWrapper = styled(Flex)(
  css({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1,
    bg: 'bg.section',
    px: 3,
    py: 4,
    width: '4.5rem',
    height: '100vh',
    zIndex: 100,
    boxShadow: 'sidebar',
  }),
)

// export const SidebarItemsContainer = styled(Flex)(
//   ({ index, sidebarAnimation }) =>
//     css({
//       flexDirection: 'column',
//       alignItems: 'center',
//       gap: 4,
//       position: 'relative',
//       ...(sidebarAnimation === 'slide' &&
//         index !== -1 && {
//           ':after': {
//             content: '""',
//             position: 'absolute',
//             top: `calc( ${index} * 4rem)`,
//             size: 12,
//             borderRadius: '50%',
//             zIndex: '-1',
//             bg: 'bg.primary',
//             transition: 'top 0.3s',
//           },
//         }),
//     }),
// )

// export const SidebarLogoContainer = styled(Box)(
//   css({
//     ':focus-visible': {
//       outlineOffset: '-0.063rem',
//       outline: 'solid 0.063rem',
//       outlineColor: 'border.textField',
//     },
//   }),
// )

// export const SidebarItemWrapper = styled(Flex)(
//   ({ isActive, sidebarAnimation }) =>
//     css({
//       ...(sidebarAnimation === 'bounce' && {
//         ':after, :before': {
//           content: '""',
//           position: 'absolute',
//           size: 12,
//           borderRadius: '50%',
//           zIndex: '-1',
//         },
//         ':before': {
//           bg: 'bg.tab',
//           transform: 'scale(0)',
//           transition: 'transform 0.15s cubic-bezier(.71,.98,.83,1.32)',
//         },
//         ':after': {
//           bg: 'bg.primary',
//           transform: isActive ? 'scale(1)' : 'scale(0)',
//           transition: 'transform 0.3s cubic-bezier(.71,.98,.83,1.32)',
//         },
//         ':not(:disabled)': {
//           ':hover': {
//             ':before': {
//               transform: 'scale(1)',
//             },
//           },
//         },
//       }),
//     }),
// )
