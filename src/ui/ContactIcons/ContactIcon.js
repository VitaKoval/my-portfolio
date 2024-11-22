import React from 'react'
import { Link } from 'react-router-dom'

const ContactIcon = ({ name, path, Icon, ...props }) => {
  return (
    <Link to={path} {...props}>
      <Icon size={24} color="#9670b8" />
    </Link>
  )
}

export default ContactIcon
