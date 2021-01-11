import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  const clickSettings = () => {
    navigation.push('Settings');
  };

  return (
    <View style={styles.header}>
      {/* <CalendarPicker
                onDateChange={() => {}}
            /> */}
      <Text>February</Text>
      {/* <Icon name="sliders" size={30} color="#900" /> */}
      <Button title="settings" onPress={clickSettings} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
