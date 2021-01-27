import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import HookupStore from '../stores/HookupStore';
import TestsStore from '../stores/TestsStore';

export default observer(() => {
  const {tests} = TestsStore;
  const {hookups} = HookupStore;
  const data = [...toJS(hookups), ...toJS(tests)];
  const [log, setLog] = useState([]);
  const parseLog = () => {
    data.forEach((e) => {
      setLog((prev) => {});
    });
  };
  useEffect(() => parseLog(), []);
  console.log(log);
  return (
    <ScrollView>
      {data.map((e) => {
        return (
          <View key={e.date + Math.random()}>
            <Text>{moment(e.date).format('MMM')}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
});

/*
[
  {
    title:firary
    dates:[
      {
        date:224234,
        name:sss,
        type:'sss'
        length:2

      }
    ]
  }
] */
