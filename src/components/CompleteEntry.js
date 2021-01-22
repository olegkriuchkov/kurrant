import {observer} from 'mobx-react';
import React from 'react';
import {Text, View} from 'react-native';
import TestsStyle from '../style/page/Tests/TestsStyle';
import EntryItem from './EntryItem';

export default observer(({arr, withText = false, single, text}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 8}}>
      {withText && (
        <Text style={[TestsStyle.textNote, {right: 10}]}>{text}</Text>
      )}
      {arr.map((e) => (
        <>
          <EntryItem
            title={e.title}
            key={e.title}
            result={e.result}
            single={single}
            sucess={true}
          />
        </>
      ))}
    </View>
  );
});
