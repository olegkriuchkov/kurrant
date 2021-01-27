import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Arrow() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="11"
      fill="none"
      viewBox="0 0 13 11">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M7.044 9.837l4.46-4.46-4.46-4.46"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.176 5.376h-9.67"
      />
    </Svg>
  );
}

export default Arrow;
