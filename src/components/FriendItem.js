import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import 'react-native-get-random-values';
import FiendEntryStore from '../stores/FiendEntryStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(
  ({title, single = false, collections, sucess = false}) => {
    const {setContactItem, friendEntrySuccess, contactItem} = FiendEntryStore;
    const [flag, setFlag] = useState(false);
    const [singleFlag, setSingleFlag] = useState(false);
    const currentItem = contactItem.find((e) => e.title === title);

    const singleTextStyle = flag
      ? TestsStyle.titleStyleSingle
      : TestsStyle.titleStyle;

    useEffect(() => {
      if (sucess) {
        setFlag(true);
      } else setFlag(false);
    }, [friendEntrySuccess]);

    const setContact = () => {
      setContactItem({
        title: currentItem ? currentItem.title : title,
        collections: collections || 'Status',
      });
    };
    const toggleSingleSelect = () => {
      if (friendEntrySuccess) {
        setFlag(true);
        if (single) {
          setContact();
        }
      }
    };

    return (
      <TouchableOpacity
        onPress={() => {
          if (sucess) {
          } else toggleSingleSelect();
        }}
        style={flag ? TestsStyle.singleMainItem : TestsStyle.mainItem}>
        {(single ? true : !flag) && (
          <Text style={singleTextStyle}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  },
);
