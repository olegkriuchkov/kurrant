import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import HomePage from '../pages/HomePage';

import NavBar from '../components/NavBar';
import TabBar from '../components/TabBar';
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
            back
            initial
            navBar={() => <NavBar color={COLOR.GREY} noStyle arrowBack />}
          />
          <Scene
            key="PIN"
            statusBarStyle="light-content"
            component={PinPage}
            back
            navBar={() => <NavBar color={COLOR.GREY} noStyle arrowBack />}
          />
          <Scene
            key="TouchID"
            statusBarStyle="light-content"
            component={Touchid}
            back
            navBar={() => <NavBar color={COLOR.GREY} noStyle arrowBack />}
          />
          <Scene
            key="Security"
            statusBarStyle="light-content"
            component={SecurityPage}
            back
            navBar={() => <NavBar noStyle arrowBack color={COLOR.GREY} />}
          />
          <Scene
            key="Data"
            statusBarStyle="light-content"
            component={DataPage}
            back
            navBar={() => <NavBar noStyle color={COLOR.GREY} arrowBack />}
          />
          <Scene
            key="DeleteData"
            statusBarStyle="light-content"
            component={DeleteData}
            back
            navBar={() => <NavBar noStyle color={COLOR.GREY} />}
          />
          <Scene
            key="Notifications"
            statusBarStyle="light-content"
            component={Notifications}
            back
            navBar={() => <NavBar noStyle color={COLOR.GREY} />}
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
