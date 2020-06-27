import React from 'react'
import styled, { css } from 'styled-components'
import Base from '../SvgAvatarMakeupBase'

const StyledBase = styled(Base)`
  width: 500px;
  height: 612px;
`

const BlackBlush = styled(StyledBase)`
  #avatar_makeup_base_svg__blush {
    fill: black;
  }
`

const BlueEyeshadow = styled(StyledBase)`
  #avatar_makeup_base_svg__eyeshadow {
    fill: blue;
  }
`

const GreenBronzer = styled(StyledBase)`
  #avatar_makeup_base_svg__bronzer {
    fill: green;
  }
`

function AvatarTestingPage () {
  return (
    <div>
      <StyledBase />
      <BlackBlush />
      <BlueEyeshadow />
      <GreenBronzer />
    </div>
  )
}

export default AvatarTestingPage;
