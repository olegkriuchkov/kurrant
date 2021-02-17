import {observer} from 'mobx-react';
import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import TestsStyle from '../style/page/Tests/TestsStyle';
import EntryItem from './EntryItem';

export default observer(({arr, withText = false, single, text, hookup}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 8}}>
      {withText && (
        <Text style={[TestsStyle.textNote, {right: 10}]}>{text}</Text>
      )}
      {arr.map((e) => (
        <Fragment key={e.title}>
          <EntryItem
            colections={text}
            title={e.title}
            result={e.result}
            single={single}
            sucess={true}
            hookup
          />
        </Fragment>
      ))}
    </View>
  );
});
