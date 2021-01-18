import {observer} from 'mobx-react';
import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar';
import TestsHeader from '../components/TestHeader';
import COLOR from '../constants/COLOR';
import Contacts from '../pages/Contacts';
import Entry from '../pages/Entry';
import HomePage from '../pages/HomePage';
import Log from '../pages/Log';
import Settings from '../pages/Settings';
import DataPage from '../pages/Settings/data/DataPage';
import DeleteData from '../pages/Settings/data/DeleteData';
import Notifications from '../pages/Settings/Notifications/Notifications';
import PinPage from '../pages/Settings/security/pinPage';
import SecurityPage from '../pages/Settings/security/SeccurityPage';
import Touchid from '../pages/Settings/security/touchID';
import Tests from '../pages/Tests';
import TabBarStyle from '../style/component/TabBarStyle';

export default observer(() => (
  <Router>
    <Scene key="root">
      <Scene hideNavBar tabs tabBarStyle={TabBarStyle.tabBar} showLabel={false}>
        <Scene
          hideNavBar
          tabs
          tabBarStyle={TabBarStyle.tabBar}
          showLabel={false}>
          <Scene
            key="Settings"
            statusBarStyle="light-content"
            component={Settings}
            hideTabBar={true}
            back
            initial
            navBar={() => <NavBar color={COLOR.GREY} noStyle arrowBack />}
          />
          <Scene
            key="PIN"
            statusBarStyle="light-content"
            component={PinPage}
            hideTabBar={true}
            back
            navBar={() => <NavBar color={COLOR.GREY} noStyle cancel />}
          />
          <Scene
            key="TouchID"
            statusBarStyle="light-content"
            component={Touchid}
            back
            navBar={() => <NavBar color={COLOR.GREY} noStyle cancel />}
            hideTabBar={true}
          />
          <Scene
            key="Security"
            statusBarStyle="light-content"
            component={SecurityPage}
            back
            hideTabBar={true}
            navBar={() => <NavBar noStyle arrowBack color={COLOR.GREY} />}
          />
          <Scene
            key="Data"
            statusBarStyle="light-content"
            component={DataPage}
            back
            navBar={() => <NavBar noStyle color={COLOR.GREY} pop />}
            hideTabBar={true} 
          />
          <Scene
            key="DeleteData"
            statusBarStyle="light-content"
            component={DeleteData}
            back
            hideTabBar={true}
            navBar={() => <NavBar noStyle color={COLOR.GREY} />}
          />
          <Scene
            key="Notifications"
            statusBarStyle="light-content"
            component={Notifications}
            back
            navBar={() => <NavBar noStyle color={COLOR.GREY} pop />}
            hideTabBar={true}
          />
        </Scene>

        <Scene
          title="Home"
          key="Home"
          statusBarStyle="light-content"
          component={HomePage}
          initial
          tabBarComponent={TabBar}
          navBar={() => <NavBar title="February" calendar settings />}
        />

        <Scene
          key="Log"
          statusBarStyle="light-content"
          component={Log}
          tabBarComponent={TabBar}
          back
          navBar={() => <NavBar color={COLOR.WHITE} calendar settings />}
        />
        <Scene
          key="Test"
          statusBarStyle="light-content"
          hideTabBar={true}
          component={Tests}
          back
          navBar={() => (
            <TestsHeader calendar tabs={['Any positive tests?', 'Notes']} />
          )}
        />

        <Scene
          key="Contacts"
          statusBarStyle="light-content"
          tabBarComponent={TabBar}
          component={Contacts}
          back
          navBar={() => <NavBar color={COLOR.WHITE} title="Contact" settings />}
        />
        <Scene
          key="Entry"
          statusBarStyle="light-content"
          tabBarComponent={TabBar}
          component={Entry}
          back
          navBar={() => (
            <TestsHeader
              calendar
              tabs={['Activity', 'Protection', 'Substance', 'Notes']}
            />
          )}
        />
      </Scene>
    </Scene>
  </Router>
));
