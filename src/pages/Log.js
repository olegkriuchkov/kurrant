import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import COLOR from '../constants/COLOR';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import TestsStore from '../stores/TestsStore';
import LogStyle from '../style/page/LogStyle';

export default observer(() => {
  const {tests} = TestsStore;
  const {hookups} = HookupStore;
  const data = [...toJS(hookups), ...toJS(tests)];
  const {globalState} = globalStore;
  const [logData, setLogData] = useState([]);
  const parseLog = () => {
    const sortDate = data.sort((a, b) => moment(a.date).diff(b.date));
    const dates = sortDate.map((e) => {
      return {
        title: moment(e.date).format('MMMM'),
        date: {
          eventDate: moment(e.date),
          name: e.name,
          type: e.type,
          length: e.test?.length || e.hookup?.length || 0,
        },
      };
    });
    const uniqueMonths = [...new Set(dates.map((e) => e.title))];
    const mergedDataByMonths = uniqueMonths.map((month) => {
      const temp = dates
        .filter((e) => e.title === month)
        .map((e) => e.date)
        .sort((a, b) => a.eventDate.diff(b.eventDate));
      return {
        title: month,
        date: temp,
        firstNoteInMonth: temp[0].eventDate,
      };
    });
    const tem = [];
    console.log('data', mergedDataByMonths);
    mergedDataByMonths.forEach((el, i) => {
      if (i === 0) return tem.push(el);
      const prevMonth = mergedDataByMonths[i - 1].firstNoteInMonth;
      const diifMonthCount = moment(el.firstNoteInMonth).diff(
        moment(prevMonth),
        'month',
      );
      if (diifMonthCount === 0) {
        return tem.push(el);
      } else {
        let count = 0;
        while (diifMonthCount - 1 !== count) {
          count++;
          const emptyMonth = {
            title: moment(prevMonth).add(count, 'month').format('MMMM'),
            firstNoteInMonth: null,
            date: [],
          };
          tem.push(emptyMonth);
        }
        tem.push(el);
      }
      console.log('temp', tem);
    });
    return tem;
  };

  useEffect(() => {
    const parse = parseLog();
    setLogData(parse);
  }, [globalState.selectedTab]);
  //
  return (
    <ScrollView>
      {logData.map((e) => {
        return (
          <View style={LogStyle.main}>
            <View style={LogStyle.title} key={e.date + Math.random()}>
              <Text style={LogStyle.titleText}>{e.title}</Text>
            </View>
            {e.date.map((el) => {
              return (
                <View style={LogStyle.infoWrapper}>
                  <Text style={LogStyle.time}>
                    {moment(el.eventDate).format('ddd D')}
                  </Text>
                  {el.type === 'hookup' ? (
                    <Text style={LogStyle.titleText}>
                      {el.name.length > 0 ? el.name : 'Noname'}
                    </Text>
                  ) : (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={require('../assets/positiveTest.png')}
                        style={LogStyle.image}
                      />
                      <Text style={LogStyle.titleText}>
                        {el.length > 0 ? 'Test - Positive' : 'Test Negative'}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
});
