import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import TestsStore from '../stores/TestsStore';
import LogStyle from '../style/page/LogStyle';

export default observer(() => {
  const {tests, getTests, testSuccess, setTestSuccess} = TestsStore;
  const {
    hookups,
    getHookups,
    logFilters,
    setChangeFlag,
    setHookupSuccess,
    setLog,
    setMainID,
  } = HookupStore;
  const {setContacID, contact} = FiendEntryStore;
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    getHookups();
    getTests();
  }, []);
  const data = [...toJS(hookups), ...toJS(tests)];
  const {globalState} = globalStore;
  const [logData, setLogData] = useState([]);
  const parseLog = (args) => {
    const sortDate = args.sort((a, b) => moment(a.date).diff(b.date));
    const dates = sortDate.map((e) => {
      const favorite = contact.find((el) => el.friendId === e.contactID);
      return {
        title: moment(e.date).format('MMMM'),
        date: {
          eventDate: moment(e.date),
          name: e.name,
          id: e?.contactID,
          mainID: e.id,
          type: e.type,
          length: e.test?.length || e.hookup?.length || 0,
          favorite: favorite?.favorite,
          date: e.date,
          colection: e.colection,
          hookups: e.hookup,
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
    });
    return tem;
  };

  useEffect(() => {
    if (logFilters.length > 0) {
      const contactFilter = data.filter((e) => {
        let coutn = 0;
        const arr = e.hookup ? e.hookup : e.test;
        const temp = arr.filter((e) => {
          if (logFilters.includes(e.title)) {
            coutn++;
            return e;
          }
        });
        return coutn === logFilters.length && temp;
      });
      console.log(toJS(contactFilter));
      contactFilter.length > 0 ? setFiltered(contactFilter) : setFiltered('');
    } else {
      setFiltered([]);
    }
  }, [globalState.selectedTab, logFilters.length]);
  useEffect(() => {
    const parse =
      filtered?.length > 0 || typeof filtered === 'string' // strange function but
        ? parseLog(filtered.length > 0 ? filtered : []) // I don't have time to redo it  all logic is on line 106
        : parseLog(data);
    setLogData(parse);
  }, [globalState.selectedTab, logFilters.length]);
  return (
    <ScrollView>
      {logData.map((e) => {
        return (
          <View style={LogStyle.main}>
            <View
              style={e.date.length > 0 ? LogStyle.title : LogStyle.singletitle}
              key={e.date + Math.random()}>
              <Text style={LogStyle.titleText}>{e.title}</Text>
            </View>
            {e.date.map((el, index) => {
              return (
                <TouchableOpacity style={LogStyle.infoWrapper}>
                  <View
                    style={
                      index === e.date.length - 1
                        ? LogStyle.itemWrapper
                        : LogStyle.lastItemWrapper
                    }>
                    <Text style={LogStyle.time}>
                      {moment(el.eventDate).format('ddd D')}
                    </Text>
                    {el.type === 'hookup' ? (
                      <TouchableOpacity
                        onPress={() => {
                          setContacID(el.id);
                          setMainID(el.mainID);
                          setHookupSuccess(false);
                          setChangeFlag(true);
                          setLog(true);
                          Actions.push('Entry', {date: el.date});
                        }}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text style={LogStyle.name}>{el.name}</Text>
                        {el.favorite && (
                          <Image
                            source={require('../assets/favorite.png')}
                            style={{width: 15, height: 15}}
                          />
                        )}
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          setContacID(el.id);
                          setTestSuccess(false);
                          setLog(true);
                          setChangeFlag(true);
                          Actions.push('Test', {date: el.date});
                        }}
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={require('../assets/positiveTest.png')}
                          style={LogStyle.image}
                        />
                        <Text style={LogStyle.titleText}>
                          {el.length > 0 ? 'Test - Positive' : 'Test Negative'}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
});
