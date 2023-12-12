import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PlusIconProps {
  width: number;
  height: number;
  style?: object;
  strokeWidth?: number;
}
const PlusIcon = ({width, height, style, strokeWidth}: PlusIconProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      style={style}
      fill="currentColor">
      <Path
        d="M25 2C12.264 2 2 12.264 2 25s10.264 23 23 23 23-10.264 23-23S37.736 2 25 2zm0 2c11.664 0 21 9.336 21 21s-9.336 21-21 21S4 36.664 4 25 13.336 4 25 4zm-1 9v11H13v2h11v11h2V26h11v-2H26V13h-2z"
        style={{strokeWidth}}
      />
    </Svg>
  );
};

export {PlusIcon};
