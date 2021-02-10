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
    result,
  }) => {
    const {hookups, changeFlag} = HookupStore;
    const [current, setCurrent] = useState([]);
    const {contactID} = FiendEntryStore;
    useEffect(() => {
      let temp;
      if (!contactID) {
        temp = hookups?.find((e) => e.id === hookups[hookups.length - 1].id);
      }
      if (contactID) {
        temp = hookups?.find(
          (e) => e.contactID === contactID && e.date === date,
        );
      }

      if (changeFlag) {
        console.log('CURRENT', toJS(temp));

        setCurrent(temp);
      }
    }, [hookups, changeFlag, contactID]);

    return (
      <View style={TestsStyle.main}>
        <View style={{flexDirection: 'column'}}>
          {!withOutText && <Text style={TestsStyle.textNote}>{title}</Text>}
          <View style={TestsStyle.contaier}>
            {array.map((titles, i) => {
              const selectedTitle = current?.hookup?.find(
                (e) => e?.title === titles,
              );
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
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  },
);
