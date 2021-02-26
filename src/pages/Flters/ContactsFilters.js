import React, {useState} from 'react';
import {View} from 'react-native';

import ButtonWithArrow from '../../components/ButtonWithArrow';
import ColapseButton from '../../components/ColapseButton';
import DataStyle from '../../style/page/Settings/DataStyle';

const ContactsFilters = () => {
  const [status, setStatus] = useState(false);
  const [position, setPosition] = useState(false);
  const stausTabs = [
    'Negative',
    'Negative, on PrEP',
    'Positive',
    'Positive, U',
  ];
  const positionTabs = ['Bottom', 'Top', 'Versatile'];
  return (
    <View style={DataStyle.main}>
      <ButtonWithArrow
        hideArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Filters"
        filters
        text="Deselect all"
      />
      <ButtonWithArrow
        onPress={() => {}}
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        hideArrow
        title="Favorites"
      />
      <ButtonWithArrow
        onPress={() => {}}
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="location"
        icon="rightArrow"
      />
      <ColapseButton
        falg={status}
        setflag={setStatus}
        array={stausTabs}
        title="Status"
      />
      <ColapseButton
        falg={position}
        array={positionTabs}
        setflag={setPosition}
        title="Position"
        last
      />
    </View>
  );
};

export default ContactsFilters;
