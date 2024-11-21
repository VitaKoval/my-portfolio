import React from 'react'
import { ContactIconsContainer } from './ContactIcons.styled'
import ContactIcon from './ContactIcon'

const ContactIcons = ({ contactItems }) => {
  return (
    <ContactIconsContainer>
      {contactItems.map((item) => (
        <ContactIcon key={item.name} {...item} />
      ))}
    </ContactIconsContainer>
  )
}

export default ContactIcons
