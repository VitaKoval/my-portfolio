import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Flex } from '@/ui'

const directions = {
  up: 270,
  down: 90,
  left: 180,
  right: 0,
}

const ChevronBox = styled(Flex)(({ direction }) =>
  css({
    alignItems: 'center',
    justifyContent: 'center',
    svg: {
      transition: '0.3s',
      transform: `rotate(${directions?.[direction] ?? 0}deg)`,
    },
  }),
)

const Chevron = ({
  color = 'border.iconNormal',
  direction = 'right',
  ...props
}) => {
  return (
    <ChevronBox direction={direction}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75173 17.6483C8.52677 17.4233 8.40039 17.1181 8.40039 16.7999C8.40039 16.4817 8.52677 16.1765 8.75173 15.9515L12.7033 11.9999L8.75173 8.0483C8.53314 7.82198 8.41219 7.51886 8.41493 7.20422C8.41766 6.88959 8.54386 6.58861 8.76635 6.36612C8.98884 6.14363 9.28982 6.01743 9.60445 6.01469C9.91909 6.01196 10.2222 6.13291 10.4485 6.3515L15.2485 11.1515C15.4735 11.3765 15.5999 11.6817 15.5999 11.9999C15.5999 12.3181 15.4735 12.6233 15.2485 12.8483L10.4485 17.6483C10.2235 17.8733 9.91833 17.9996 9.60013 17.9996C9.28194 17.9996 8.97677 17.8733 8.75173 17.6483Z"
          fill={color}
          className="Box-sc-qj50em-0 IconBase__Base-sc-o0b3e5-0 IconBase__Path-sc-o0b3e5-1 qceHu dLHWJf"
        ></path>
      </svg>
    </ChevronBox>
  )
}

Chevron.displayName = 'Chevron'

export default Chevron
