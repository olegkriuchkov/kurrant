import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/pages/HomePage';
import Log from './src/pages/Log';
import Contacts from './src/pages/Contacts';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Log" component={Log} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
