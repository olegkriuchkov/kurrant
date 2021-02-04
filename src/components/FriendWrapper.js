import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import FiendEntryStore from '../stores/FiendEntryStore';
import TestsStyle from '../style/page/Tests/TestsStyle';
import FriendItem from './FriendItem';

export default observer(
  ({array, title, single = false, withOutText = false}) => {
    const {contact, contactID, friendEntrySuccess} = FiendEntryStore;
    const [current, setCurrent] = useState([]);
    useEffect(() => {
      const temp = contact?.find((e) => e.friendId === contactID);
      setCurrent(temp);
    }, []);
    /*
    console.log('CURRENT', toJS(current));
*/

    return (
      <View style={TestsStyle.main}>
        <View style={{flexDirection: 'column'}}>
          {!withOutText && <Text style={TestsStyle.textNote}>{title}</Text>}
          <View style={TestsStyle.contaier}>
            {array.map((titles) => {
              const selectedTitle = current?.contact?.find(
                (e) => e?.title === titles,
              );
              /*
              console.log('CURRENT', toJS(selectedTitle));
*/
              return (
                <FriendItem
                  title={titles}
                  key={titles}
                  single={single}
                  collections={title}
                  current={selectedTitle?.title}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  },
);
