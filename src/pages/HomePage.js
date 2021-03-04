import {observer} from 'mobx-react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';

import TestsStore from '../stores/TestsStore';
import HomePageStyle from '../style/page/HomePageStyle';

const HomePage = observer(() => {
  const [modalFlag, setModalFlag] = useState(true);
  const [hookupsCounter, setHookupsCounter] = useState(0);
  const [lastTest, setLasttest] = useState(0);
  const {
    getHookups,
    hookups,
    hookupSuccess,
    setLog,
    setChangeFlag,
    clearForm,
    setInitial,
  } = HookupStore;
  const {
    getTests,
    tests,
    testSuccess,
    setTestSuccess,
    setAddTest,
    clearTestItem,
  } = TestsStore;
  const {setContacID, setSearchValue, keys} = FiendEntryStore;
  const getCountHookups = () => {
    const temp = hookups?.filter((el) => {
      return moment(el?.date).diff(moment(Date.now()), 'days') > -90;
    });
    setHookupsCounter(temp.length);
  };
  const getLastTest = () => {
    const lastTest = tests.sort(
      (a, b) =>
        moment(a?.date).diff(moment(Date.now()), 'days') -
        moment(b?.date).diff(moment(Date.now()), 'days'),
    );
    const diff = moment(lastTest[lastTest?.length - 1]?.date).diff(
      moment(Date.now()),
      'days',
    );
    setLasttest(Math.abs(diff));
  };
  const {globalState, getAsyncPass, auth} = globalStore;
  const {
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
    setSearchValue('');
  }, [testSuccess, hookupSuccess, friendEntrySuccess, globalState.selectedTab]);

  useEffect(() => {
    getCountHookups();
    getLastTest();
  }, [hookups, tests]);

  return (
    <View>
      <View style={modalFlag ? {} : {opacity: 0.1}}>
        <ScrollView style={HomePageStyle.main}>
          <View style={HomePageStyle.daysView}>
            <TouchableOpacity
              style={HomePageStyle.lastDayTest}
              onPress={() => {
                Actions.AnalyticsPage();
              }}>
              <Text style={HomePageStyle.days}>{lastTest}</Text>
              <Text style={HomePageStyle.text}>Days since last test</Text>
            </TouchableOpacity>
            <View style={HomePageStyle.hookupView}>
              <View style={HomePageStyle.lastHookup}>
                <Text style={HomePageStyle.days}>{hookupsCounter}</Text>
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
              setChangeFlag(false);
              clearForm();
              setInitial(true);
            }}>
            <Text style={HomePageStyle.modalText}>New hookup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalFlag(true);
              setTestSuccess(true);
              setLog(false);
              setAddTest(true);
              clearTestItem();
              Actions.Test();
            }}>
            <Text style={HomePageStyle.modalText}>New test result</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={() => setModalFlag(!modalFlag)}
        activeOpacity={0.8}
        style={HomePageStyle.button}>
        <View
          style={
            !modalFlag
              ? [HomePageStyle.horisontalLine, {transform: [{rotate: '45deg'}]}]
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
  );
});

export default HomePage;
