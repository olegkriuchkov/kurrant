import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ButtonWithArrow from '../../../components/ButtonWithArrow';
import DataStyle from '../../../style/page/Settings/DataStyle';
import COLOR from '../../../constants/COLOR';
import NotificationStyle from '../../../style/page/Settings/NotificationStyle';

const Notifications = () => {
  return (
    <ScrollView style={DataStyle.main}>
      <ButtonWithArrow
        hideArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Notifications"
      />
      <View style={NotificationStyle.info}>
        <Text style={NotificationStyle.infoText}>
          Set up to receive reoccurring notifications as a reminder to stay up
          to date with STI screenings
        </Text>
      </View>
      <ButtonWithArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="30 days"
        icon="rightArrow"
        onPress={() => Actions.PIN()}
      />
      <ButtonWithArrow
        onPress={() => Actions.TouchID()}
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="60 days"
        icon="rightArrow"
      />
      <ButtonWithArrow
        onPress={() => Actions.TouchID()}
        style={DataStyle.bottomButton}
        textStyle={DataStyle.buttonText}
        title="90 days(recomended)"
        icon="rightArrow"
      />
    </ScrollView>
  );
};

export default Notifications;
