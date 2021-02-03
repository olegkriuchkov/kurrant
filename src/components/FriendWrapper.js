import React from 'react';
import {Text, View} from 'react-native';
import TestsStyle from '../style/page/Tests/TestsStyle';
import FriendItem from './FriendItem';

export default ({array, title, single = false, withOutText = false}) => (
  <View style={TestsStyle.main}>
    <View style={{flexDirection: 'column'}}>
      {!withOutText && <Text style={TestsStyle.textNote}>{title}</Text>}
      <View style={TestsStyle.contaier}>
        {array.map((titles) => (
          <FriendItem
            title={titles}
            key={titles}
            single={single}
            collections={title}
          />
        ))}
      </View>
    </View>
  </View>
);
