import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import COLOR from '../../../constants/COLOR';
import ButtonWithArrow from '../../../components/ButtonWithArrow';

const DataPage = () => {
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
        title="Data"
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
        title="Export to Google Drive"
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
        title="Delete all app data"
        icon="rightArrow"
      />
    </ScrollView>
  );
};

export default DataPage;
