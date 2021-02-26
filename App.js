import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import TabsRoute from './src/Route/TabsRoute';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <TabsRoute />
    </>
  );
}

export default App;
