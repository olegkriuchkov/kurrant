import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';

import {Actions} from 'react-native-router-flux';
import NavbarStyle from '../style/component/NavbarStyle';
import COLOR from '../constants/COLOR';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';

const TestsHeader = ({color, noStyle}) => {
  const [select, setSelect] = useState(true);
  return (
    <View
      style={
        noStyle
          ? [NavbarStyle.noStyle, {backgroundColor: color}]
          : TestsHeaderStyle.mainStyle
      }>
      <View style={TestsHeaderStyle.mainWrapper}>
        <View>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Image
              source={require('../assets/back.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 24, color: COLOR.PINK}}>
              New test results
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 24}}>February 9</Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/more.png')}
                  style={TestsHeaderStyle.button}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={TestsHeaderStyle.imageWrapper}>
          <Image
            style={TestsHeaderStyle.image}
            source={require('../assets/okButton.png')}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 0, marginRight: 5}}>
        <TouchableOpacity
          onPress={() => setSelect(true)}
          style={
            select
              ? {
                  margin: 10,
                  marginBottom: 0,
                  borderWidth: 3.5,
                  borderColor: COLOR.WHITE,
                  paddingBottom: 7,
                  borderBottomColor: COLOR.PINK,
                }
              : {
                  margin: 10,
                  marginTop: 14,
                  marginBottom: 0,
                }
          }>
          <Text
            style={
              select
                ? {fontSize: 18, color: COLOR.PINK}
                : {fontSize: 18, opacity: 0.5, color: COLOR.BLACK}
            }>
            Any positive results?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelect(false)}
          style={
            !select
              ? {
                  margin: 10,
                  marginBottom: 0,
                  borderWidth: 3.5,
                  borderColor: COLOR.WHITE,
                  paddingBottom: 7,
                  borderBottomColor: COLOR.PINK,
                }
              : {
                  margin: 10,
                  marginTop: 14,
                  marginBottom: 0,
                }
          }>
          <Text
            style={
              !select
                ? {fontSize: 18, color: COLOR.PINK}
                : {fontSize: 18, opacity: 0.5, color: COLOR.BLACK}
            }>
            Notes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

TestsHeader.defaultProps = {};

export default TestsHeader;
