import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import globalStore from '../stores/globalStore';
import Image from './Image';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Tabs from './Tabs';
import HookupStore from '../stores/HookupStore';
import TouchebleText from './TouchebleText';

export default observer(({calendar, tabs}) => {
  const [calendarFlag, setCalendarFlag] = useState(false);
  const [date, setDate] = useState(new Date());
  const [select, setSelect] = useState(true);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [id, setId] = useState(uuidv4());
  const {globalState} = globalStore;

  const {
    setHookups,
    setHookupDate,
    clearForm,
    setHookupSuccess,
    setName,
    name,
    hookupSuccess,
    deleteHookup,
    setChangeFlag,
  } = HookupStore;
  useEffect(() => setCalendarFlag(false), [globalState.selectedTab.length]);
  useEffect(() => {
    setHookupDate(new Date());
  }, []);
  const save = () => {
    setHookups(id);
    setHookupSuccess(false);
    setChangeFlag(true);
  };
  const press = (day) => {
    setDate(new Date(day.timestamp));
    setHookupDate(new Date(day.timestamp));
  };
  const home = () => {
    setHookupSuccess(true);
    setChangeFlag(false);

    clearForm();
    Actions.replace('Home');
  };
  return (
    <View style={TestsHeaderStyle.mainStyle}>
      <View style={TestsHeaderStyle.mainWrapper}>
        <View>
          <Image
            onPress={() => home()}
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
                  {hookupSuccess && calendar && (
                    <CalendarButton
                      onPress={() => setCalendarFlag(!calendarFlag)}
                      calendarFlag={calendarFlag}
                    />
                  )}
                </View>
                {calendarFlag && <CustomCalendar onPress={press} date={date} />}

                {!hookupSuccess ? (
                  <Text style={TestsHeaderStyle.inputStyle}>{name}</Text>
                ) : (
                  <TextInput
                    onChangeText={(text) => setName(text)}
                    placeholder="Enter name"
                    style={TestsHeaderStyle.inputStyle}
                    value={name}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
        {hookupSuccess && (
          <Image
            style={TestsHeaderStyle.image}
            containerStyle={TestsHeaderStyle.imageWrapper}
            onPress={() => {
              save();
            }}
            path={require('../assets/okButton.png')}
          />
        )}
        {!hookupSuccess && (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={TestsHeaderStyle.changeImage}
              path={require('../assets/change.png')}
              onPress={() => {
                setHookupSuccess(true);
              }}
            />
            <Image
              style={TestsHeaderStyle.undDeleteImage}
              path={require('../assets/delete.png')}
              onPress={() => setDeleteFlag(true)}
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
      {deleteFlag && (
        <View style={TestsHeaderStyle.deletScreenWrapper}>
          <Image
            path={require('../assets/deleteConfirm.png')}
            containerStyle={{alignSelf: 'flex-end'}}
            style={TestsHeaderStyle.deleteImage}
            onPress={() => setDeleteFlag(false)}
          />
          <View style={TestsHeaderStyle.mainDeleteTextWrapper}>
            <TouchebleText
              text="Delete entry?"
              containerStyle={TestsHeaderStyle.deleteTextWrapper}
              style={TestsHeaderStyle.mainDeleteText}
            />
            <TouchebleText
              text="Delete entry"
              containerStyle={[
                TestsHeaderStyle.deleteTextWrapper,
                {marginTop: 5},
              ]}
              style={TestsHeaderStyle.deleteText}
              onPress={() => deleteHookup(id)}
            />
            <TouchebleText
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
