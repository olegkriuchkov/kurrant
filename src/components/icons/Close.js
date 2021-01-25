import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Icon({fill}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      fill="none"
      viewBox="0 0 33 33">
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeWidth="2"
        d="M24.67 8.236L8.237 24.67M24.67 24.671L8.235 8.236"
      />
    </Svg>
  );
}

export default Icon;
