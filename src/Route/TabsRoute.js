import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import HomePage from '../pages/HomePage';

import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar/TabBar';
import Settings from '../pages/Settings';
import COLOR from '../constants/COLOR';
import Log from '../pages/Log';
import SecurityPage from '../pages/Settings/security/SeccurityPage';
import DataPage from '../pages/Settings/data/DataPage';
import Contacts from '../pages/Contacts';
import PinPage from '../pages/Settings/security/pinPage';
import DeleteData from '../pages/Settings/data/DeleteData';
import Notifications from '../pages/Settings/Notifications/Notifications';
import Touchid from '../pages/Settings/security/touchID';
import Tests from '../pages/Tests';
import TestsHeader from '../components/TestHeader';
import TabBarStyle from '../style/component/TabBarStyle';
import Entry from '../pages/Entry';

export default observer(() => (
  <Router>
    <Stack key="root">
      <Stack hideNavBar tabs tabBarStyle={TabBarStyle.tabBar} showLabel={false}>
        <Scene
          title="Home"
          key="Home"
          statusBarStyle="light-content"
          component={HomePage}
          initial
          tabBarComponent={TabBar}
          onEnter={() => {}}
          navBar={() => <NavBar title="February" calendar settings />}
        />

        <Scene
          key="Log"
          statusBarStyle="light-content"
          component={Log}
          tabBarComponent={TabBar}
          onEnter={() => {}}
          back
          navBar={() => <NavBar color={COLOR.WHITE} calendar settings />}
        />

        <Scene
          key="Contacts"
          statusBarStyle="light-content"
          tabBarComponent={TabBar}
          component={Contacts}
          onEnter={() => {}}
          back
          navBar={() => <NavBar color={COLOR.WHITE} title="Contact" settings />}
        />
      </Stack>
      <Stack
        key="Settings"
        hideNavBar
        tabs
        tabBarStyle={TabBarStyle.tabBar}
        showLabel={false}>
        <Scene
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
          navBar={() => <NavBar color={COLOR.GREY} noStyle arrowBack />}
        />
        <Scene
          key="TouchID"
          statusBarStyle="light-content"
          component={Touchid}
          back
          hideTabBar={true}
          navBar={() => <NavBar color={COLOR.GREY} noStyle arrowBack />}
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
          hideTabBar={true}
          navBar={() => <NavBar noStyle color={COLOR.GREY} arrowBack />}
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
          hideTabBar={true}
          navBar={() => <NavBar noStyle color={COLOR.GREY} />}
        />
      </Stack>
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
    </Stack>
  </Router>
));
