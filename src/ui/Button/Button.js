import React from 'react'
import { handleEvent } from '@/utils'
import { ButtonBase } from './Button.styled'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button = ({
  children,
  icon = false,
  onHandleEvent,
  size = 'small',
  variant = 'primary',
  ...props
}) => {
  const eventProps = onHandleEvent ? handleEvent(onHandleEvent) : {}

  return (
    <ButtonBase {...eventProps} variant={variant} size={size} {...props}>
      {children}
      {icon && <FaArrowRightLong />}
    </ButtonBase>
  )
}

export default Button
