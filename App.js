import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Image, View, Platform, StatusBar, Dimensions} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Login from './src/components/Login';
import TabsRoute from './src/Route/TabsRoute';
import FiendEntryStore from './src/stores/FiendEntryStore';
import globalStore from './src/stores/globalStore';
import HomePageStyle from './src/style/page/HomePageStyle';

const App = observer(() => {
  const [isLoading, setLoading] = useState(true);
  const {confirmPassword, setConfirmPassword, auth} = globalStore;
  const {keys} = FiendEntryStore;
  useEffect(() => {
    SplashScreen.hide();
    if (keys.length === 0) {
      setConfirmPassword(true);
    }
    if (keys.includes('@Pass') && !auth) {
      setConfirmPassword(false);
    }
    setLoading(false);
  }, [keys, auth]);

  const windowStyle = {
    height: Dimensions.get('window').height + 100,
  };

  if (isLoading) return null;

  if (!confirmPassword) {
    return (
      <>
        <View style={HomePageStyle.splashScreenContainer}>
          <Image
            style={HomePageStyle.splashScreenContainer}
            source={require('./src/assets/SplashScreen.png')}
            resizeMode="stretch"
          />
        </View>
        <View style={[HomePageStyle.pinContainer, windowStyle]}>
          <Login />
        </View>
      </>
    );
  }
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <TabsRoute />
    </>
  );
});

export default App;
