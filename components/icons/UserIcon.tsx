import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type IconProps = {
  size?: number;
  color?: string;
};

export function UserIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx={12} cy={6} r={4} fill={color} />
      <Path
        fill={color}
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
      />
    </Svg>
  );
}
