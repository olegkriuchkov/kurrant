import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/pages/HomePage';
import Log from './src/pages/Log';
import Contacts from './src/pages/Contacts';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Log" component={Log} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
