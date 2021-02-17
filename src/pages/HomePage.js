import {toJS} from 'mobx';
import {observer} from 'mobx-react';
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
  const {getHookups, hookups, hookupSuccess, setLog} = HookupStore;
  const {getTests, tests, testSuccess, setTestSuccess, setAddTest} = TestsStore;
  const {setContacID, setSearchValue} = FiendEntryStore;
  const {globalState} = globalStore;
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
    console.log('Hookups', toJS(hookups));
    console.log('Tests', toJS(tests));
    console.log('Contacts', toJS(contact));
  }, [testSuccess, hookupSuccess, friendEntrySuccess, globalState.selectedTab]);

  return (
    <View>
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
