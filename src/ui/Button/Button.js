import React from 'react'
import { ButtonWrap } from './Button.styled'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button = ({ title, onClick, ...props }) => {
  return (
    <ButtonWrap onClick={onClick} {...props}>
      {title}
      <FaArrowRightLong />
    </ButtonWrap>
  )
}

export default Button
