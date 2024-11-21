import React from 'react'
import { Link } from 'react-router-dom'

const ContactIcon = ({ name, path, Icon, ...props }) => {
  return (
    <Link to={path} {...props}>
      <Icon size={24} />
    </Link>
  )
}

export default ContactIcon
