import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Preloader } from '@/ui'

export default function RouteComponent({ Component, ...props }) {
  if (!Component) {
    return null
  }
  const isLoading = false

  const ComponentBlock = isLoading ? Preloader : Component

  return (
    <Suspense fallback={<Preloader />}>
      <ComponentBlock {...props} />
    </Suspense>
  )
}

RouteComponent.propTypes = {
  Component: PropTypes.elementType,
}
