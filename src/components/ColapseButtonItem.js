import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import COLOR from '../constants/COLOR';

const ColapseButtonItem = ({el}) => {
  const [colorFlag, setColourFlag] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setColourFlag(!colorFlag)}
      style={{
        margin: 10,
        width: '44%',
        borderRadius: 20,
        backgroundColor: colorFlag ? COLOR.PINK : COLOR.WHITE,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colorFlag ? COLOR.WHITE : COLOR.BLACK}}>{el}</Text>
    </TouchableOpacity>
  );
};
export default ColapseButtonItem;
