import React from 'react';
import {ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ButtonWithArrow from '../../../components/ButtonWithArrow';
import DataStyle from '../../../style/page/Settings/DataStyle';

const SecurityPage = () => {
  return (
    <ScrollView style={DataStyle.main}>
      <ButtonWithArrow
        hideArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Security"
        onPress={() => {}}
      />
      <ButtonWithArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Add PIN Lock"
        icon="rightArrow"
        onPress={() => Actions.PIN()}
      />
      <ButtonWithArrow
        onPress={() => Actions.TouchID()}
        style={DataStyle.bottomButton}
        textStyle={DataStyle.buttonText}
        title="Setup Touch ID"
        icon="rightArrow"
      />
    </ScrollView>
  );
};

export default SecurityPage;
