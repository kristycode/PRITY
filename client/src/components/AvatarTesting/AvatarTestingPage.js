import React from "react";
//--- removing { css } from line 3 because React says it is not being used
import styled from "styled-components";
import Base from "./SVG/SvgAvatarMakeupBase";

function AvatarTestingPage(props) {
  const StyledBase = styled(Base)`
    width: 500px;
    height: 612px;
  `;

  const BlackBlush = styled(StyledBase)`
    #avatar_makeup_base_svg__blush {
      fill: black;
    }
  `;

  const Eyeshadow = styled(StyledBase)`
    #avatar_makeup_base_svg__eyeshadow {
      fill: ${props.eyes};
    }
    #avatar_makeup_base_svg__blush {
      fill: ${props.blush};
    }
  `;

  const GreenBronzer = styled(StyledBase)`
    #avatar_makeup_base_svg__bronzer {
      fill: green;
    }
  `;
  return (
    <div>
      <StyledBase />
      <BlackBlush />
      <Eyeshadow />
      <GreenBronzer />
    </div>
  );
}

export default AvatarTestingPage;
