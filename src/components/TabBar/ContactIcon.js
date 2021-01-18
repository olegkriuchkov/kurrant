import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ContactIcon = ({fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="25"
      fill="none"
      viewBox="0 0 22 25">
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.863 23.045v-5.029a4.931 4.931 0 00-9.862 0v5.029h19.746"
      />
      <Path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.725 23.045v-5.029a4.931 4.931 0 00-9.862 0v5.029M5.932 10.142a4.351 4.351 0 100-8.702 4.351 4.351 0 000 8.702zM15.794 10.142a4.351 4.351 0 100-8.702 4.351 4.351 0 000 8.702z"
      />
    </Svg>
  );
};

export default ContactIcon;
