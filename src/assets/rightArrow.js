import React from 'react';
import Svg, {Path} from 'react-native-svg';
import COLOR from '../constants/COLOR';

const RightArrow = ({width, height, viewBox, fill, color}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill={fill}>
    <Path
      d="M1 1l6.5 6.5L1 14"
      stroke={color}
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </Svg>
);
RightArrow.defaultProps = {
  width: 9,
  height: 15,
  viewBox: '0 0 9 15',
  fill: 'none',
  color: COLOR.WHITE,
};
export default RightArrow;
