import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import COLOR from '../constants/COLOR';
import ButtonWithArrow from '../components/ButtonWithArrow';

const Settings = () => {
  return (
    <ScrollView style={{height: '100%', backgroundColor: COLOR.GREY}}>
      <ButtonWithArrow
        hideArrow
        style={{
          width: '95%',
          marginHorizontal: 10,
          borderWidth: 1.5,
          borderColor: COLOR.GREY,
          borderBottomColor: COLOR.WHITE,
        }}
        textStyle={{color: COLOR.WHITE, fontSize: 24, fontWeight: '800'}}
        title="Play App"
      />
      <ButtonWithArrow
        onPress={() => Actions.Security()}
        style={{
          width: '95%',
          marginHorizontal: 10,
          borderWidth: 1.5,
          borderColor: COLOR.GREY,
          borderBottomColor: COLOR.WHITE,
        }}
        textStyle={{color: COLOR.WHITE, fontSize: 24, fontWeight: '800'}}
        title="Security"
        icon="rightArrow"
      />
      <ButtonWithArrow
        style={{
          width: '95%',
          marginHorizontal: 10,
          borderWidth: 1.5,
          borderColor: COLOR.GREY,
          borderBottomColor: COLOR.WHITE,
        }}
        textStyle={{color: COLOR.WHITE, fontSize: 24, fontWeight: '800'}}
        title="Notification"
        icon="rightArrow"
      />
      <ButtonWithArrow
        onPress={() => Actions.Data()}
        style={{width: '95%', marginHorizontal: 10, fontWeight: '800'}}
        textStyle={{color: COLOR.WHITE, fontSize: 24}}
        title="Data"
        icon="rightArrow"
      />
    </ScrollView>
  );
};

export default Settings;