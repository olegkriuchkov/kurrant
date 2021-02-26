import {observer} from 'mobx-react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import 'react-native-get-random-values';
import {Actions} from 'react-native-router-flux';
import {v4 as uuidv4} from 'uuid';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Image from './Image';
import Search from './Search';
import Tabs from './Tabs';
import TouchebleText from './TouchebleText';

export default observer(({calendar, tabs}) => {
  const {
    setHookups,
    setHookupDate,
    clearForm,
    setHookupSuccess,
    setName,
    name,
    setTab,
    hookupSuccess,
    setContactHookupFlag,
    deleteHookup,
    mainID,
    setMainID,
    setChangeFlag,
    log,
    setInitial,
    contactHookupFlag,
  } = HookupStore;
  const [calendarFlag, setCalendarFlag] = useState(false);
  const [date, setDate] = useState(new Date());
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [id, setId] = useState(uuidv4());
  const {globalState, setCurrentNote} = globalStore;
  const {
    contactID,
    contact,
    setSelect,
    setSearchValue,
    isSearch,
    searchValue,
    setAddHookups,
  } = FiendEntryStore;
  const [nameCurrent, setCurrentName] = useState({
    currentName: null,
    currentLocation: null,
  });

  useEffect(() => {
    const currentContact = contact?.find((e) => e.friendId === contactID);

    setCurrentName({
      currentName: currentContact?.name,
      currentLocation: currentContact?.location,
    });
    if (contactID) {
      nameCurrent?.currentName !== undefined &&
      nameCurrent?.currentName !== null
        ? setSearchValue(nameCurrent?.currentName)
        : true;
    }
  }, [contactID, globalState.selectedTab]);
  useEffect(() => setCalendarFlag(false), [globalState.selectedTab.length]);
  useEffect(() => {
    setHookupDate(new Date());
  }, []);
  const save = () => {
    if (searchValue || nameCurrent.currentName) {
      if (contactID !== null) {
        setName(nameCurrent.currentName);
        setHookups(mainID, contactID);
      } else {
        setHookups(id);
      }
      setHookupSuccess(false);
      setChangeFlag(true);
    } else {
      Alert.alert(
        '',
        'Pleas enter the name',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {text: 'OK', onPress: () => {}},
        ],
        {cancelable: false},
      );
    }
  };

  const press = (day) => {
    setDate(new Date(day.timestamp));
    setHookupDate(new Date(day.timestamp));
  };
  const home = () => {
    setMainID(null);
    setCurrentNote('');
    setAddHookups(false);
    setContactHookupFlag(false);
    setHookupSuccess(true);
    setChangeFlag(false);
    setSelect(false);
    setInitial(false);
    clearForm();
    setTab('Activity');
    if (contactID) {
      Actions.pop();
    } else Actions.replace('Home');
  };
  return (
    <View
      style={
        isSearch
          ? [
              TestsHeaderStyle.mainStyle,
              {
                backgroundColor: COLOR.LIGHT_GREY,
                shadowColor: COLOR.WHITE,
                elevation: 0,
              },
            ]
          : TestsHeaderStyle.mainStyle
      }>
      <View style={TestsHeaderStyle.mainWrapper}>
        {!isSearch && (
          <View>
            <Image
              onPress={() => {
                home();
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
                    {hookupSuccess && calendar && (
                      <CalendarButton
                        onPress={() => setCalendarFlag(!calendarFlag)}
                        calendarFlag={calendarFlag}
                      />
                    )}
                  </View>
                  {calendarFlag && (
                    <CustomCalendar onPress={press} date={date} />
                  )}
                  {!contactID && !contactHookupFlag && (
                    <Search hookup disable />
                  )}
                  {!!contactID && !contactHookupFlag && !hookupSuccess && (
                    <Text style={TestsHeaderStyle.inputStyle}>
                      {nameCurrent?.currentName}
                    </Text>
                  )}
                  {hookupSuccess && !!contactID && !contactHookupFlag && (
                    <Search hookup disable={true} name />
                  )}
                </View>
              </View>
            </View>
          </View>
        )}
        {isSearch && <Search hookup disable />}
        {hookupSuccess && !contactHookupFlag && !isSearch && (
          <Image
            style={TestsHeaderStyle.image}
            containerStyle={TestsHeaderStyle.imageWrapper}
            onPress={() => {
              save();
            }}
            path={require('../assets/okButton.png')}
          />
        )}
        {!hookupSuccess && !contactHookupFlag && !isSearch && (
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
      {!isSearch && (
        <View style={TestsHeaderStyle.mainTabsWrapper}>
          <Tabs
            tab={tabs}
            onPress={(tabId) => {
              setTab(tabId);
            }}
            defaultTab={tabs[0]}
          />
        </View>
      )}
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
