import React, { useContext } from "react";
//--- removing { css } from line 3 because React says it is not being used
import styled from "styled-components";
import Base from "./SVG/SvgAvatarMakeupBase";
import ChipContext from "../Context/ChipContext";

function AvatarTestingPage() {

  const { chipObj, setChipObj } = useContext(ChipContext);

  console.log(chipObj);

  const StyledBase = styled(Base)`
    width: 310.45px;
    height: 395.77px;
  `;

  const TestingAvatar = styled(StyledBase)`
  #avatar_makeup_base_svg__eyeshadow {
    fill: ${chipObj.eyeshadow};
  }
  #avatar_makeup_base_svg__eyeliner {
     fill: ${chipObj.eyeliner};
  }
  #avatar_makeup_base_svg__blush {
    fill: ${chipObj.blush};
  }
  #avatar_makeup_base_svg__bronzer {
    fill: ${chipObj.bronzer};
  }
  #avatar_makeup_base_svg__lips {
    fill: ${chipObj.lipstick};
  }`;

  // const BlackBlush = styled(StyledBase)`
  //   #avatar_makeup_base_svg__blush {
  //     fill: black;
  //   }
  // `;

  // const Eyeshadow = styled(StyledBase)`
  //   #avatar_makeup_base_svg__eyeshadow {
  //     fill: ${state.eyes};
  //   }
  //   #avatar_makeup_base_svg__blush {
  //     fill: ${state.blush};
  //   }
  // `;

  // const GreenBronzer = styled(StyledBase)`
  //   #avatar_makeup_base_svg__bronzer {
  //     fill: green;
  //   }
  // `;

  return (
    <div>
      <TestingAvatar />
      
    </div>
  );
}

export default AvatarTestingPage;
