import React from 'react';
import Svg, {Path} from 'react-native-svg';
import COLOR from '../constants/COLOR';

const ArrowBack = ({width, height, viewBox, fill, color}: IconProps) => (
  <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
    <Path d="M15 1.5L3.5 13L15 24.5" stroke={color} strokeWidth={4} />
  </Svg>
);

ArrowBack.defaultProps = {
  width: 17,
  height: 26,
  viewBox: '0 0 17 26',
  fill: 'none',
  color: COLOR.WHITE,
};
export default ArrowBack;
