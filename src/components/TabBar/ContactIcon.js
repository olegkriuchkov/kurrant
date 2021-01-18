import React from 'react';

const ContactIcon = (fill) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="25"
      fill={fill}
      viewBox="0 0 22 25">
      <path
        stroke="#B7B7B7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.863 23.045v-5.029a4.931 4.931 0 00-9.862 0v5.029h19.746"
      />
      <path
        stroke="#B7B7B7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.725 23.045v-5.029a4.931 4.931 0 00-9.862 0v5.029M5.932 10.142a4.351 4.351 0 100-8.702 4.351 4.351 0 000 8.702zM15.794 10.142a4.351 4.351 0 100-8.702 4.351 4.351 0 000 8.702z"
      />
    </svg>
  );
};

export default ContactIcon;
