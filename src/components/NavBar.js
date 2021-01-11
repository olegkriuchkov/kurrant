import React from 'react';
import {Title} from 'native-base';
import {Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from './Icon';
import COLOR from '../constants/COLOR';

const NavBar = ({
  title,
  arrowBack,
  color,
  onPress,
  titleStyle,
  settings,
  noStyle,
}) => (
  <View
    style={
      !noStyle
        ? {height: 70, backgroundColor: color}
        : {
            height: 70,
            backgroundColor: COLOR.WHITE,
            shadowOffset: {
              width: 0,
              height: 25,
            },
            justifyContent: 'space-between',
            shadowOpacity: 1,
            shadowRadius: 0,
            flexDirection: 'row',
            elevation: 10,
          }
    }>
    <View style={{flexDirection: 'row'}}>
      {arrowBack && (
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Icon
            iconType="arrowBack"
            color={COLOR.BLACK}
            width={15}
            style={{margin: 10, marginTop: 25}}
          />
        </TouchableOpacity>
      )}
      <View style={{margin: 10, marginTop: 25}}>
        <Text style={[titleStyle, {fontSize: 20}]}>{title}</Text>
      </View>
    </View>
    {settings && (
      <TouchableOpacity
        style={{marginTop: 15}}
        onPress={() => Actions.Settings()}>
        <Icon iconType="plus" />
      </TouchableOpacity>
    )}
  </View>
);

NavBar.defaultProps = {};

export default NavBar;
