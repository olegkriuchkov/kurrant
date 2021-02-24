import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Login from '../components/Login';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import TestsStore from '../stores/TestsStore';
import HomePageStyle from '../style/page/HomePageStyle';

const HomePage = observer(() => {
  const [modalFlag, setModalFlag] = useState(true);
  const {getHookups, hookups, hookupSuccess, setLog} = HookupStore;
  const {getTests, tests, testSuccess, setTestSuccess, setAddTest} = TestsStore;
  const {setContacID, setSearchValue, keys} = FiendEntryStore;
  const {
    globalState,
    getAsyncPass,
    asyncPass,
    confirmPassword,
    setConfirmPassword,
    auth,
  } = globalStore;
  const {
    contact,
    getContacts,
    friendEntrySuccess,
    getAllKeys,
    setIsSearch,
    setAddHookups,
  } = FiendEntryStore;

  useEffect(() => {
    getAllKeys();
    getHookups();
    getTests();
    getContacts();
    getAsyncPass();
    console.log('Hookups', toJS(hookups));
    console.log('Tests', toJS(tests));
    console.log('Contacts', toJS(contact));
    console.log('PASS', toJS(asyncPass));
    console.log('AUTH', toJS(auth));
  }, [testSuccess, hookupSuccess, friendEntrySuccess, globalState.selectedTab]);
  useEffect(() => {
    if (keys.length === 0) {
      setConfirmPassword(true);
      console.log('TTTTTTTTTTUUUUUUUUUT');
    }
    if (keys.includes('@Pass') && !auth) {
      setConfirmPassword(false);
      console.log('ZDDDDDEEEEEEEES');
    }
  }, [keys]);

  return (
    <>
      <View
        style={
          !confirmPassword
            ? {position: 'absolute', zIndex: -1, marginLeft: 10}
            : {}
        }>
        <View style={modalFlag ? {} : {opacity: 0.1}}>
          <ScrollView style={HomePageStyle.main}>
            <View style={HomePageStyle.daysView}>
              <TouchableOpacity
                style={HomePageStyle.lastDayTest}
                onPress={() => Actions.AnalyticsPage()}>
                <Text style={HomePageStyle.days}>90</Text>
                <Text style={HomePageStyle.text}>Days since last test</Text>
              </TouchableOpacity>
              <View style={HomePageStyle.hookupView}>
                <View style={HomePageStyle.lastHookup}>
                  <Text style={HomePageStyle.days}>8</Text>
                  <Text style={HomePageStyle.text}>Hookups (90 days)</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {!modalFlag && (
          <View style={HomePageStyle.modal}>
            <TouchableOpacity
              onPress={() => {
                setModalFlag(true);
                setContacID(null);
                Actions.Entry();
                setIsSearch(false);
                setAddHookups(true);
                setSearchValue('');

                console.log('Hookups', toJS(hookups));
              }}>
              <Text style={HomePageStyle.modalText}>New hookup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalFlag(true);
                setTestSuccess(true);
                setLog(false);
                setAddTest(true);
                Actions.Test();
                console.log('Tests', toJS(tests));
              }}>
              <Text style={HomePageStyle.modalText}>New test result</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          onPress={() => setModalFlag(!modalFlag)}
          activeOpacity={0.8}
          style={
            !confirmPassword
              ? [HomePageStyle.button, {top: '80%'}]
              : HomePageStyle.button
          }>
          <View
            style={
              !modalFlag
                ? [
                    HomePageStyle.horisontalLine,
                    {transform: [{rotate: '45deg'}]},
                  ]
                : HomePageStyle.horisontalLine
            }
          />
          <View
            style={
              !modalFlag
                ? [HomePageStyle.verticalLine, {transform: [{rotate: '45deg'}]}]
                : HomePageStyle.verticalLine
            }
          />
        </TouchableOpacity>
      </View>
      {!confirmPassword && (
        <View
          style={{
            position: 'absolute',
            zIndex: 5,
            opacity: 0.9,
            width: '100%',
            height: Dimensions.get('window').height + 100,
          }}>
          <Login />
        </View>
      )}
    </>
  );
});

export default HomePage;
