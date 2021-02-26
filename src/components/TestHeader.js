import {observer} from 'mobx-react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import 'react-native-get-random-values';
import {Actions} from 'react-native-router-flux';
import {v4 as uuidv4} from 'uuid';
import COLOR from '../constants/COLOR';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import TestsStore from '../stores/TestsStore';
import NavbarStyle from '../style/component/NavbarStyle';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Image from './Image';
import Tabs from './Tabs';
import TouchebltText from './TouchebleText';

export default observer(({color, noStyle, calendar, tabs}) => {
  const [calendarFlag, setCalendarFlag] = useState(false);
  const [id] = useState(uuidv4());
  const [date, setDate] = useState(new Date());
  const [deleteFlag, setDeleteFlag] = useState(false);
  const resultTabs = ['Results', 'Notes'];
  const {globalState} = globalStore;
  const {setLog, setChangeLog} = HookupStore;
  const {
    setTestDate,
    setTest,
    clearTestItem,
    setTestSuccess,
    testSuccess,
    deleteTest,
    setTab,
    setBeforeResult,
    setBeforeSaving,
    beforeResult,
    beforeSaving,
    setResult,
    setTestsItem,
    testItems,
    setChangeFlag,
    setUnFulScreening,
    currentTestId,
    setAddTest,
    setCurrentID,
    setFullScreening,
  } = TestsStore;

  useEffect(() => {
    setTestDate(new Date());
  }, []);
  useEffect(() => setCalendarFlag(false), [globalState.selectedTab]);
  const save = () => {
    setChangeLog(false);
    if (testItems.length > 0) {
      if (currentTestId) {
        setTest(currentTestId);
      } else {
        setTest(id);
      }
      setChangeFlag(true);
      setTestSuccess(false);
    } else {
      setBeforeSaving(true);
    }
  };
  const press = (day) => {
    setDate(new Date(day.timestamp));
    setTestDate(new Date(day.timestamp));
  };
  const home = () => {
    setCurrentID(null);
    setFullScreening(false);
    setChangeLog(false);
    setAddTest(false);
    setBeforeSaving(false);
    setBeforeResult(false);
    setTestSuccess(true);
    clearTestItem();
    setTab('');
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
            onPress={() => {
              save();
            }}
          />
        )}
        {!testSuccess && (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 25, height: 25}}
              path={require('../assets/change.png')}
              onPress={() => {
                setTab('What were you tested for?');
                setResult(false);
                setChangeFlag(true);
                setLog(true);
                setChangeLog(true);
                setUnFulScreening(false);
                setTestSuccess(true);
              }}
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
          tab={testSuccess ? tabs : resultTabs}
          onPress={(tabId) => {
            setTab(tabId);
          }}
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
              onPress={() => deleteTest(currentTestId || id)}
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
      {beforeResult && (
        <View style={TestsHeaderStyle.warning}>
          <View style={TestsHeaderStyle.errorWrapper}>
            <TouchebltText
              text="Select what you were tested for before inputting your results."
              containerStyle={TestsHeaderStyle.cancelWrapper}
              style={[
                TestsHeaderStyle.deleteText,
                {marginTop: 50, width: '75%', left: 20},
              ]}
            />
            <Image
              style={[TestsHeaderStyle.image, {right: 10}]}
              path={require('../assets/okButton.png')}
              containerStyle={TestsHeaderStyle.imageWrapper}
              onPress={() => {
                setBeforeResult(false);
              }}
            />
          </View>
        </View>
      )}

      {beforeSaving && (
        <View style={TestsHeaderStyle.warning}>
          <View style={TestsHeaderStyle.errorWrapper}>
            <TouchebltText
              text="Input your results before saving your test."
              containerStyle={TestsHeaderStyle.cancelWrapper}
              style={[
                TestsHeaderStyle.deleteText,
                {marginTop: 50, width: '75%', left: 20},
              ]}
            />
            <Image
              style={[TestsHeaderStyle.image, {right: 10}]}
              path={require('../assets/okButton.png')}
              containerStyle={TestsHeaderStyle.imageWrapper}
              onPress={() => {
                setBeforeSaving(false);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
});
