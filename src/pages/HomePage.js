import {observer} from 'mobx-react';
import React, {useState, useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {toJS} from 'mobx';
import TestsStore from '../stores/TestsStore';
import HomePageStyle from '../style/page/HomePageStyle';
import HookupStore from '../stores/HookupStore';

const HomePage = observer(() => {
  const [modalFlag, setModalFlag] = useState(true);
  const {getHookups, hookups, hookupSuccess} = HookupStore;
  const {getTests, tests, testSuccess} = TestsStore;

  useEffect(() => {
    getHookups();
    getTests();
    console.log('Hookups', toJS(hookups));
    console.log('Tests', toJS(tests));
  }, [testSuccess, hookupSuccess]);
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
              Actions.Entry();
              console.log('Hookups', toJS(hookups));
            }}>
            <Text style={HomePageStyle.modalText}>New hookup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalFlag(true);
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
