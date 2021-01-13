import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import COLOR from '../../../constants/COLOR';
import ButtonWithArrow from '../../../components/ButtonWithArrow';

const SecurityPage = () => {
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
        title="Security"
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
        title="Add PIN Lock"
        icon="rightArrow"
        onPress={() => Actions.PIN()}
      />
      <ButtonWithArrow
        onPress={() => Actions.TouchID()}
        style={{
          width: '95%',
          marginHorizontal: 10,
          borderWidth: 1.5,
          borderColor: COLOR.GREY,
          borderBottomColor: COLOR.WHITE,
        }}
        textStyle={{color: COLOR.WHITE, fontSize: 24, fontWeight: '800'}}
        title="Setup Touch ID"
        icon="rightArrow"
      />
    </ScrollView>
  );
};

export default SecurityPage;
