import React from 'react';
import {Router, Scene, SceneProps, Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import HomePage from '../pages/HomePage';

import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar';
import Settings from '../pages/Settings';
import COLOR from '../constants/COLOR';
import Log from '../pages/Log';
import SecurityPage from '../pages/Settings/SeccurityPage';
import DataPage from '../pages/Settings/DataPage';

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
          navBar={() => <NavBar title="February" settings />}
        />
        <Scene
          key="Settings"
          statusBarStyle="light-content"
          component={Settings}
          back
          navBar={() => <NavBar noStyle color={COLOR.GREY} arrowBack />}
        />
        <Scene
          key="Log"
          statusBarStyle="light-content"
          component={Log}
          back
          navBar={() => <NavBar noStyle color={COLOR.GREY} arrowBack />}
        />
        <Scene
          key="Security"
          statusBarStyle="light-content"
          component={SecurityPage}
          back
          navBar={() => <NavBar noStyle color={COLOR.GREY} arrowBack />}
        />
        <Scene
          key="Data"
          statusBarStyle="light-content"
          component={DataPage}
          back
          navBar={() => <NavBar noStyle color={COLOR.GREY} arrowBack />}
        />
      </Scene>
    </Scene>
  </Router>
));
