import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import ButtonWithArrow from '../../components/ButtonWithArrow';
import ColapseButton from '../../components/ColapseButton';
import COLOR from '../../constants/COLOR';
import FiendEntryStore from '../../stores/FiendEntryStore';
import DataStyle from '../../style/page/Settings/DataStyle';

export default observer(() => {
  const [status, setStatus] = useState(false);
  const [position, setPosition] = useState(false);
  const {
    clearFilters,
    favoriteFilter,
    favoriteFlag,
    countryFilter,
  } = FiendEntryStore;
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
        onPress={() => {
          clearFilters();
        }}
        filters
        text="Deselect all"
      />
      <ButtonWithArrow
        onPress={() => {
          favoriteFilter();
        }}
        style={DataStyle.button}
        textStyle={
          favoriteFlag
            ? [DataStyle.buttonText, {color: COLOR.PINK}]
            : DataStyle.buttonText
        }
        hideArrow
        title="Favorites"
      />
      <ButtonWithArrow
        onPress={() => {
          Actions.CountryFilter();
        }}
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title={countryFilter?.slice(0, 15) || 'location'}
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
});
