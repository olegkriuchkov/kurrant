import {toJS} from 'mobx';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import FiendEntryStore from '../stores/FiendEntryStore';
import TestsStyle from '../style/page/Tests/TestsStyle';

export default observer(
  ({title, single = false, collections, sucess = false, current}) => {
    const {setContactItem, friendEntrySuccess, contactItem} = FiendEntryStore;
    const [flag, setFlag] = useState(false);
    const [id, setId] = useState(uuidv4);
    const currentItem = contactItem.find((e) => e.id === id);

    useEffect(() => {
      if (currentItem?.title === title) {
        setFlag(true);
      }
      if (sucess) {
        setFlag(true);
      } else if (title === current) {
        setFlag(true);
      } else setFlag(false);
    }, [friendEntrySuccess]);
    const singleTextStyle = flag
      ? TestsStyle.titleStyleSingle
      : TestsStyle.titleStyle;
    const setContact = (curentTitle) => {
      curentTitle
        ? setContactItem({
            title: curentTitle,
            collections: collections || 'Status',
            id,
          })
        : setContactItem({
            title: currentItem ? currentItem.title : title,
            collections: collections || 'Status',
            id,
          });
    };

    const toggleSingleSelect = () => {
      if (friendEntrySuccess) {
        setFlag(!flag);
        setContact();
      }
    };

    return (
      <TouchableOpacity
        onPress={() => {
          !sucess && toggleSingleSelect();
        }}
        style={flag ? TestsStyle.singleMainItem : TestsStyle.mainItem}>
        {(single ? true : !flag) && (
          <Text style={singleTextStyle}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  },
);
