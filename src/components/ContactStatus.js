import {observer} from 'mobx-react';
import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import TestsStyle from '../style/page/Tests/TestsStyle';
import FriendItem from './FriendItem';

export default observer(({arr, withText = false, text}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 0}}>
      {withText && (
        <Text style={[TestsStyle.textNote, {right: 10}]}>{text}</Text>
      )}
      {arr.map((e) => (
        <Fragment key={e.title}>
          <FriendItem
            title={e.title}
            result={e.result}
            single={true}
            sucess={true}
          />
        </Fragment>
      ))}
    </View>
  );
});
