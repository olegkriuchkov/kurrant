import React from 'react';
import Svg, {Path} from 'react-native-svg';

function LogIcon({fill}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="25"
      fill="none"
      viewBox="0 0 23 25">
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21.022 10.144H1.275v12.901h19.747V10.144zM21.022 3.298H1.275v6.846h19.747V3.298zM6.212 1.001v5.068M16.085 1.001v5.068"
      />
    </Svg>
  );
}

export default LogIcon;
