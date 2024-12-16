import React from 'react'
import PropTypes from 'prop-types'

import { StyledSpinner } from './Spinner.styled'

const Spinner = ({ color = 'bg.primaryHover', size = 6, ...props }) => (
  <StyledSpinner viewBox="0 0 50 50" size={size} {...props}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
      stroke={color}
    />
  </StyledSpinner>
)

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Spinner.displayName = 'Spinner'

export default Spinner
