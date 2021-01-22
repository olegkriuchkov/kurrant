import React from 'react';
import {Text} from 'react-native';
import TestsStyle from '../style/page/Tests/TestsStyle';
import EntryItem from './EntryItem';

export default ({arr, withText = false, single, text}) =>
  arr.map((e) => (
    <>
      {withText && (
        <Text style={[TestsStyle.textNote, {right: 10}]}>{text}</Text>
      )}
      <EntryItem
        title={e.title}
        key={e.title}
        result={e.result}
        single={single}
        sucess={true}
      />
    </>
  ));
