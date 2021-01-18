import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import COLOR from '../../constants/COLOR';
import globalStore from '../../stores/globalStore';
import {TabIcon} from './TabIcon';

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderTopColor: COLOR.NAVBARBORDER,
    borderColor: COLOR.WHITE,
    borderWidth: 1,
    marginBottom: 15,
  },
  icon: {width: 20, height: 22, marginTop: 10},
});

const TabBar = observer(() => {
  const icons = [
    {iconName: 'contact', onPress: () => Actions.Contacts()},
    {iconName: 'home', onPress: () => Actions.Home()},
    {iconName: 'log', onPress: () => Actions.Log()},
  ];
  const {globalState} = globalStore;

  return (
    <View style={styles.container}>
      {icons.map((icon) => (
        <TabIcon
          iconName={icon.iconName}
          onPress={icon.onPress}
          selectedIcon={globalState.selectedTab}
          key={icon.iconName}
        />
      ))}
    </View>
  );
});

export default TabBar;
