import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ButtonWithArrow from '../components/ButtonWithArrow';
import COLOR from '../constants/COLOR';
import DataStyle from '../style/page/Settings/DataStyle';

const Settings = () => {
  return (
    <View style={DataStyle.main}>
      <ButtonWithArrow
        hideArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Play App"
      />
      <ButtonWithArrow
        onPress={() => Actions.Security()}
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Security"
        icon="rightArrow"
      />
      <ButtonWithArrow
        onPress={() => Actions.Notifications()}
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Notification"
        icon="rightArrow"
      />
      <ButtonWithArrow
        onPress={() => Actions.Data()}
        style={DataStyle.bottomButton}
        textStyle={DataStyle.buttonText}
        title="Data"
        icon="rightArrow"
      />
      <TouchableOpacity style={DataStyle.sendFeedbackWrapper}>
        <Text style={DataStyle.sendFeedbackText}>Send Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
