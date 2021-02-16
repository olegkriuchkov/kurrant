import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import FiendEntryStore from '../stores/FiendEntryStore';
import HookupStore from '../stores/HookupStore';
import TestsStyle from '../style/page/Tests/TestsStyle';
import EntryItem from './EntryItem';

export default observer(
  ({
    array,
    title,
    single = false,
    types,
    withOutText = false,
    sucess = false,
    date,
    hookup,
    result,
  }) => {
    const {hookups, changeFlag, hookupSuccess} = HookupStore;
    const [current, setCurrent] = useState([]);
    const {contactID, contactHookup, select, addHookups} = FiendEntryStore;
    useEffect(() => {
      let temp;
      if (addHookups) {
        temp = hookups?.find((e) => e.id === hookups[hookups.length - 1].id);
        console.log('temp1', toJS(temp));
      }
      if (contactID && !addHookups) {
        temp = hookups?.find(
          (e) => e.contactID === contactID && e.date === date,
        );
        console.log('temp2', temp);
      }
      if (select && contactHookup.length > 0) {
        temp = hookups?.find(
          (e) => e.contactID === hookups[hookups.length - 1].contactID,
        );
      }
      if (changeFlag) {
        setCurrent(temp);
      }
    }, [hookups, changeFlag, contactID, hookupSuccess]);
    return (
      <View style={TestsStyle.main}>
        <View style={{flexDirection: 'column'}}>
          {!withOutText && <Text style={TestsStyle.textNote}>{title}</Text>}
          <View style={TestsStyle.contaier}>
            {array.map((titles, i) => {
              const selectedTitle = current?.hookup?.find((e) => {
                return e?.title === titles;
              });

              return (
                <EntryItem
                  title={titles}
                  key={titles}
                  types={types}
                  single={selectedTitle ? selectedTitle.single : single}
                  sucess={sucess}
                  result={result}
                  current={selectedTitle}
                  colections={title}
                  hookup
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  },
);
