import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/pages/HomePage';
import Log from './src/pages/Log';
import Contacts from './src/pages/Contacts';
import { Text, View } from 'react-native';
import Header from './src/shared/Header';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  const rightButtons = [
    {
        id: 1,
        color: 'rgba(255, 255, 255, 0.15)',
        content: <Text>fg</Text>,
        action: () => alert('First Right Button'),
    },
    {
        id: 2,
        color: 'rgba(255, 255, 255, 0.15)',
        content: <Text>jjjj</Text>,
        action: () => alert('Second Right Button'),
    },
  ];
  return (
    <NavigationContainer>
      <Header/>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home"
          component={HomePage}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}/>
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Log" component={Log} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
