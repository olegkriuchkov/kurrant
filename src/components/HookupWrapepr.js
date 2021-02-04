import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
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
    result,
  }) => {
    const {hookups, changeFlag} = HookupStore;
    const [current, setCurrent] = useState([]);
    useEffect(() => {
      const temp = hookups?.find(
        (e) => e.id === hookups[hookups.length - 1].id,
      );
      console.log('TEMP', toJS(temp));
      console.log('flag', changeFlag);
      if (changeFlag) {
        setCurrent(temp);
      }
    }, [hookups, changeFlag]);
    return (
      <View style={TestsStyle.main}>
        <View style={{flexDirection: 'column'}}>
          {!withOutText && <Text style={TestsStyle.textNote}>{title}</Text>}
          <View style={TestsStyle.contaier}>
            {array.map((titles) => {
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
