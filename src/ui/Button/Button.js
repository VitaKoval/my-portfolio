import React from 'react'
import { ButtonWrap } from './Button.styled'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button = ({ title, as = 'button', ...props }) => {
  return (
    <ButtonWrap as={as} {...props}>
      {title}
      <FaArrowRightLong />
    </ButtonWrap>
  )
}

export default Button
