import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import Image from './Image';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Tabs from './Tabs';
import HookupStore from '../stores/HookupStore';

export default observer(({calendar, tabs}) => {
  const [calendarFlag, setCalendarFlag] = useState(false);
  const {
    setHookups,
    setHookupDate,
    setHookupNote,
    setHookupSuccess,
    setName,
    HookupSuccess,
  } = HookupStore;

  useEffect(() => {
    setHookupDate(new Date(Date.now()));
  }, []);

  const save = () => {
    setHookups();
    setHookupNote();
    setHookupSuccess(false);
  };
  const press = (day) => {
    setDate(new Date(day.timestamp));
    setHookupDate(date);
  };

  const [date, setDate] = useState(new Date(Date.now()));
  const [select, setSelect] = useState(true);
  return (
    <View style={TestsHeaderStyle.mainStyle}>
      <View style={TestsHeaderStyle.mainWrapper}>
        <View>
          <Image
            onPress={() => {
              Actions.replace('Home');
              setHookupSuccess(true);
            }}
            path={require('../assets/back.png')}
            style={TestsHeaderStyle.backImage}
          />
          <View style={TestsHeaderStyle.titlewrapper}>
            <View style={TestsHeaderStyle.headWrapper}>
              <View style={TestsHeaderStyle.columnWrapper}>
                <View style={TestsHeaderStyle.headWrapper}>
                  <Text style={TestsHeaderStyle.date}>
                    {moment(date).format('MMMM D')}
                  </Text>
                  {calendar && (
                    <CalendarButton
                      onPress={() => setCalendarFlag(!calendarFlag)}
                      calendarFlag={calendarFlag}
                    />
                  )}
                </View>
                {calendarFlag && <CustomCalendar onPress={press} date={date} />}

                <TextInput
                  onChangeText={(text) => setName(text)}
                  placeholder="Enter name"
                  style={TestsHeaderStyle.inputStyle}
                />
              </View>
            </View>
          </View>
        </View>
        {HookupSuccess && (
          <Image
            style={TestsHeaderStyle.image}
            containerStyle={TestsHeaderStyle.imageWrapper}
            onPress={() => save()}
            path={require('../assets/okButton.png')}
          />
        )}
        {!HookupSuccess && (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 25, height: 25}}
              path={require('../assets/change.png')}
              onPress={() => setHookupSuccess(true)}
            />
            <Image
              style={{width: 25, height: 25, marginLeft: 20}}
              path={require('../assets/delete.png')}
            />
          </View>
        )}
      </View>
      <View style={TestsHeaderStyle.mainTabsWrapper}>
        <Tabs
          tabs={tabs}
          onPress={(tabId) => setSelect(tabId)}
          defaultTab={tabs[0]}
        />
      </View>
    </View>
  );
});
