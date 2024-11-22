import React from 'react'
import { SpinnerContainer } from './Spinner.styled'
import { Flex } from '@/ui'

const Spinner = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex width="300px" height="300px" position="relative">
        <SpinnerContainer>
          <SpinnerContainer>
            <SpinnerContainer>
              <SpinnerContainer>
                <SpinnerContainer>
                  <SpinnerContainer />
                </SpinnerContainer>
              </SpinnerContainer>
            </SpinnerContainer>
          </SpinnerContainer>
        </SpinnerContainer>
      </Flex>
    </Flex>
  )
}

export default Spinner
