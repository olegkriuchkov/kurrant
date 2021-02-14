import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import TabsRoute from './src/Route/TabsRoute';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <TabsRoute />;
}

export default App;
