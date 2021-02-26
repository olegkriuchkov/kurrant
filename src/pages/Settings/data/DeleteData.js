import React from 'react';
import {ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonWithArrow from '../../../components/ButtonWithArrow';
import HookupStore from '../../../stores/HookupStore';
import TestsStore from '../../../stores/TestsStore';
import DataStyle from '../../../style/page/Settings/DataStyle';

const DeleteData = () => {
  const {getHookups} = HookupStore;
  const {getTests} = TestsStore;
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      getHookups();
      getTests();
    } catch (e) {
      throw new Error(e);
    }
  };
  return (
    <ScrollView style={DataStyle.main}>
      <ButtonWithArrow
        hideArrow
        style={DataStyle.button}
        textStyle={DataStyle.redButtonText}
        title="Delete all app data?"
        onPress={() => {}}
      />
      <ButtonWithArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Yes, delete all app data"
        hideArrow
        icon="rightArrow"
        onPress={() => clearAll()}
      />
      <ButtonWithArrow
        onPress={() => Actions.pop()}
        hideArrow
        style={DataStyle.bottomButton}
        textStyle={DataStyle.buttonText}
        title="Cancel"
        icon="rightArrow"
      />
    </ScrollView>
  );
};

export default DeleteData;
