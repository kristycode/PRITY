import React from "react";
import styled from "styled-components";
import Base from "../../AvatarTesting/SVG/SvgAvatarMakeupBase";
import chroma from "chroma-js";

const hairColors = [
  "#090806",
  "#3B3024",
  "#A7856A",
  "#E6CEA8",
  "#A56B46",
  "#91553D",
  "#71635A",
  "#71635A",
  "#B7A69E",
  "#B7A69E",
  "#FFF5E1",
  "#8D4A43",
];

const skinColors = [
  "#e7bb98",
  "#f3d39a",
  "#e4ba92",
  "#daae82",
  "#c48b60",
  "#d9b17d",
  "#cc9778",
  "#ab6d44",
  "#8f5434",
  "#b98e61",
  "#b6784f",
  "#7e5040",
  "#73452d",
  "#4f2f20",
];

const eyeColors = [
  "#634e34",
  "#2e536f",
  "#2a423c",
  "#3d671d",
  "#1c7847",
  "#497665",
  "#76948c",
  "#79c4c1",
];

function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

function RandomAvatar() {
  const randomEyeColor =
    eyeColors[Math.floor(Math.random() * eyeColors.length)];

  const randomHairColor =
    hairColors[Math.floor(Math.random() * hairColors.length)];

  const randomSkinColor =
    skinColors[Math.floor(Math.random() * skinColors.length)];

  const DarkenFaceOutline = () => {
    const darkFaceOutline = randomSkinColor;
    if (darkFaceOutline !== "null") {
      return chroma(darkFaceOutline).darken(2.5).saturate(2);
    }
  };

  const LightenEyeReflection = () => {
    const lightEyeReflection = randomEyeColor;
    {
      return chroma(lightEyeReflection).brighten(2).saturate(1);
    }
  };

  const DarkenFaceShapeOutline = () => {
    const darkFaceShapeOutline = randomSkinColor;
    if (darkFaceShapeOutline !== "null") {
      return chroma(darkFaceShapeOutline).darken(3.5).saturate(2);
    }
  };

  const DarkenLashes = () => {
    const darkLashes = randomHairColor;
    if (darkLashes !== "null") {
      return chroma(darkLashes).darken(3).saturate(0.5);
    }
  };

  const LightenMakeupArea = LightenDarkenColor(randomSkinColor, 10);
  const DarkenMakeupOutline = LightenDarkenColor(randomSkinColor, -20);

  const eyeshadow = chroma.random();
  const eyeliner = chroma.random();
  const blush = chroma.random();
  const bronzer = chroma.random();
  const lipstick = chroma.random();

  const RandomCardAvatar = styled(Base)`
    width: 232.8375px;
    height: 296.8275px;

    .avatar_makeup_base_svg__cls-4 {
      fill: ${LightenMakeupArea};
      stroke: ${DarkenMakeupOutline};
    }
    #avatar_makeup_base_svg__eyeshadow {
      fill: ${eyeshadow};
    }
    .avatar_makeup_base_svg__cls-4_2 {
      fill: ${eyeshadow};
    }
    #avatar_makeup_base_svg__eyeliner {
      fill: ${eyeliner};
    }
    #avatar_makeup_base_svg__blush {
      fill: ${blush};
    }
    #avatar_makeup_base_svg__bronzer {
      fill: ${bronzer};
    }
    #avatar_makeup_base_svg__lips {
      fill: ${lipstick};
    }
    #avatar_makeup_base_svg__hair_color {
      fill: ${randomHairColor};
    }
    #avatar_makeup_base_svg__left_brow {
      fill: ${randomHairColor};
    }
    #avatar_makeup_base_svg__right_brow {
      fill: ${randomHairColor};
    }
    #avatar_makeup_base_svg__right_brow {
      fill: ${randomHairColor};
    }
    .avatar_makeup_base_svg__cls-6 {
      fill: ${DarkenLashes};
    }
    .avatar_makeup_base_svg__cls-7 {
      fill: ${DarkenLashes};
    }
    .avatar_makeup_base_svg__cls-1 {
      fill: ${randomSkinColor};
    }
    .avatar_makeup_base_svg__cls-8 {
      fill: ${DarkenFaceOutline};
    }
    .avatar_makeup_base_svg__cls-9 {
      fill: ${DarkenFaceShapeOutline};
    }
    .avatar_makeup_base_svg__cls-5 {
      fill: ${randomEyeColor};
    }
    .avatar_makeup_base_svg__cls-11 {
      fill: ${LightenEyeReflection};
    }
  `;

  return (
    <div>
      <RandomCardAvatar />
    </div>
  );
}

export default RandomAvatar;
