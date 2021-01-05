import React from 'react';
import Svg, {G, Circle, Path, Rect, Defs} from 'react-native-svg';
import COLOR from '../constants/COLOR';

export const Plus = ({width, height, viewBox, color}) => (
  <Svg width={width} height={height} viewBox={viewBox} fill="none">
    <G>
      <Circle cx={24} cy={22} r={22} fill={color} />
    </G>
    <Path d="M23 13a1 1 0 112 0v18a1 1 0 11-2 0V13z" fill={COLOR.PINK} />
    <Rect x={14} y={21} width={20} height={2} rx={1} fill={COLOR.PINK} />
    <Defs />
  </Svg>
);
Plus.defaultProps = {
  width: 48,
  height: 48,
  viewBox: '0 0 48 48',
  color: COLOR.WHITE,
};
