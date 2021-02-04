import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import FiendEntryStore from '../stores/FiendEntryStore';
import HookupStore from '../stores/HookupStore';
import TestsStyle from '../style/page/Tests/TestsStyle';
import EntryItem from './EntryItem';

export default ({
  array,
  title,
  single = false,
  types,
  withOutText = false,
  sucess = false,
  result,
}) => {
  return (
    <View style={TestsStyle.main}>
      <View style={{flexDirection: 'column'}}>
        {!withOutText && <Text style={TestsStyle.textNote}>{title}</Text>}
        <View style={TestsStyle.contaier}>
          {array.map((titles) => (
            <EntryItem
              title={titles}
              key={titles}
              types={types}
              single={single}
              sucess={sucess}
              result={result}
              colections={title}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
