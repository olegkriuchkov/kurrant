import React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon({fill}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      fill="none"
      viewBox="0 0 26 25">
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24.526 12.657L12.87 1.001 1.214 12.657"
      />
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.438 8.645v14.4h14.865v-14.4"
      />
    </Svg>
  );
}

export default HomeIcon;
