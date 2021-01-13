import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import HomePageStyle from '../style/page/HomePageStyle';

const HomePage = () => {
  const [modalFlag, setModalFlag] = useState(true);
  return (
    <View>
      <View style={modalFlag ? {} : {opacity: 0.1}}>
        <ScrollView style={HomePageStyle.main}>
          <View style={HomePageStyle.daysView}>
            <View style={HomePageStyle.lastDayTest}>
              <Text style={HomePageStyle.days}>90</Text>
              <Text style={HomePageStyle.text}>Days since last test</Text>
            </View>
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
          <Text style={HomePageStyle.modalText}>New hookup</Text>
          <Text style={HomePageStyle.modalText}>New test result</Text>
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
};

export default HomePage;
