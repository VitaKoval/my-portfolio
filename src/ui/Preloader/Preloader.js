import React from 'react'
import Flex from '../Flex'
import Spinner from '../Spinner'

export default function Preloader(props) {
  return (
    <Flex variant="center" size="100%" {...props}>
      <Spinner size="xxl" />
    </Flex>
  )
}
