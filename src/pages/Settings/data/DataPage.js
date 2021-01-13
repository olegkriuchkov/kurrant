import React from 'react';
import {ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ButtonWithArrow from '../../../components/ButtonWithArrow';
import DataStyle from '../../../style/page/Settings/DataStyle';

const DataPage = () => {
  return (
    <ScrollView style={DataStyle.main}>
      <ButtonWithArrow
        hideArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Data"
      />
      <ButtonWithArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Export to Google Drive"
        icon="rightArrow"
      />
      <ButtonWithArrow
        style={DataStyle.bottomButton}
        textStyle={DataStyle.buttonText}
        title="Delete all app data"
        icon="rightArrow"
        onPress={() => Actions.DeleteData()}
      />
    </ScrollView>
  );
};

export default DataPage;
