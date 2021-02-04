import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import globalStore from '../stores/globalStore';
import Image from './Image';
import COLOR from '../constants/COLOR';
import NavbarStyle from '../style/component/NavbarStyle';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Tabs from './Tabs';
import TestsStore from '../stores/TestsStore';
import TouchebltText from './TouchebleText';

export default observer(({color, noStyle, calendar, tabs}) => {
  const [calendarFlag, setCalendarFlag] = useState(false);
  const [id, setId] = useState(uuidv4());
  const [date, setDate] = useState(new Date());
  const [select, setSelect] = useState(true);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const resultTabs = ['Results', 'Notes'];
  const {globalState} = globalStore;

  const {
    setTestDate,
    setTest,
    clearTestItem,
    setTestSuccess,
    testSuccess,
    deleteTest,
    setChangeFlag,
  } = TestsStore;

  useEffect(() => {
    setTestDate(new Date());
  }, []);
  useEffect(() => setCalendarFlag(false), [globalState.selectedTab]);
  const save = () => {
    setTest(id);
    setChangeFlag(true);

    setTestSuccess(false);
  };
  const press = (day) => {
    setDate(new Date(day.timestamp));
    setTestDate(new Date(day.timestamp));
  };
  const home = () => {
    setTestSuccess(true);
    clearTestItem();
    setChangeFlag(false);

    Actions.replace('Home');
  };
  return (
    <View
      style={
        noStyle
          ? [NavbarStyle.noStyle, {backgroundColor: color}]
          : TestsHeaderStyle.mainStyle
      }>
      <View style={TestsHeaderStyle.mainWrapper}>
        <View>
          <Image
            path={require('../assets/back.png')}
            style={TestsHeaderStyle.backImage}
            onPress={() => home()}
          />
          <View style={TestsHeaderStyle.titlewrapper}>
            <Text
              style={
                testSuccess
                  ? TestsHeaderStyle.titleText
                  : [TestsHeaderStyle.titleText, {color: COLOR.BLACK}]
              }>
              {testSuccess ? 'New test results' : 'Test result'}
            </Text>
            <View style={TestsHeaderStyle.headWrapper}>
              <View style={TestsHeaderStyle.columnWrapper}>
                <View style={TestsHeaderStyle.headWrapper}>
                  <Text style={TestsHeaderStyle.date}>
                    {moment(date).format('MMMM D')}
                  </Text>
                  {calendar && testSuccess && (
                    <CalendarButton
                      onPress={() => setCalendarFlag(!calendarFlag)}
                      calendarFlag={calendarFlag}
                    />
                  )}
                </View>
                {calendarFlag && <CustomCalendar onPress={press} date={date} />}
              </View>
            </View>
          </View>
        </View>
        {testSuccess && (
          <Image
            style={TestsHeaderStyle.image}
            path={require('../assets/okButton.png')}
            containerStyle={TestsHeaderStyle.imageWrapper}
            onPress={() => save()}
          />
        )}
        {!testSuccess && (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 25, height: 25}}
              path={require('../assets/change.png')}
              onPress={() => setTestSuccess(true)}
            />
            <Image
              style={{width: 25, height: 25, marginLeft: 20}}
              path={require('../assets/delete.png')}
              onPress={() => setDeleteFlag(true)}
            />
          </View>
        )}
      </View>
      <View style={TestsHeaderStyle.mainTabsWrapper}>
        <Tabs
          tabs={testSuccess ? tabs : resultTabs}
          onPress={(tabId) => setSelect(tabId)}
          defaultTab={testSuccess ? tabs[0] : resultTabs[0]}
        />
      </View>
      {deleteFlag && (
        <View style={TestsHeaderStyle.deletScreenWrapper}>
          <Image
            path={require('../assets/deleteConfirm.png')}
            containerStyle={{alignSelf: 'flex-end'}}
            style={TestsHeaderStyle.deleteImage}
            onPress={() => setDeleteFlag(false)}
          />
          <View style={TestsHeaderStyle.mainDeleteTextWrapper}>
            <TouchebltText
              text="Delete test?"
              containerStyle={TestsHeaderStyle.deleteTextWrapper}
              style={TestsHeaderStyle.mainDeleteText}
            />
            <TouchebltText
              text="Delete test"
              containerStyle={[
                TestsHeaderStyle.deleteTextWrapper,
                {marginTop: 5},
              ]}
              onPress={() => deleteTest(id)}
              style={TestsHeaderStyle.deleteText}
            />
            <TouchebltText
              text="Cancel"
              containerStyle={TestsHeaderStyle.cancelWrapper}
              onPress={() => setDeleteFlag(false)}
              style={TestsHeaderStyle.deleteText}
            />
          </View>
        </View>
      )}
    </View>
  );
});
