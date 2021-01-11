import React from 'react';
import {Router, Scene, SceneProps, Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import HomePage from '../pages/HomePage';

import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar';
import Settings from '../pages/Settings';

export default observer(() => (
  <Router>
    <Scene key="root">
      <Scene
        hideNavBar
        tabs
        tabBarStyle={{
          flex: 1,
          borderColor: 'black',
          height: 100,
          width: '100%',
          backgroundColor: 'black',
        }}
        showLabel={false}
        /* tabBarOnPress={{navigation}) => {
          const {state} = navigation;
          const {key} = state;
          if (key !== 'plus') {
            Actions[key]();
          }
        }} */
      >
        <Scene
          title="Home"
          key="Home"
          statusBarStyle="light-content"
          component={HomePage}
          initial
          tabBarComponent={TabBar}
          navBar={() => <NavBar title="February" />}
        />
        <Scene
          title="Settings"
          key="Settings"
          statusBarStyle="light-content"
          component={Settings}
          tabBarComponent={TabBar}
          navBar={() => (
            <NavBar title="Settings" arrowBack onPress={() => Actions.pop()} />
          )}
        />
      </Scene>
    </Scene>
  </Router>
));
