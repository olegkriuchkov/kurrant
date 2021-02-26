import {Collapse, CollapseBody, CollapseHeader} from 'accordion-collapse-react-native';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';
import HookupStore from '../stores/HookupStore';
import DataStyle from '../style/page/Settings/DataStyle';
import ButtonWithArrow from './ButtonWithArrow';
import ColapseButtonItem from './ColapseButtonItem';

export default observer(({falg, setflag, title, array, last}) => {
  const [style, setStyle] = useState(0);
  const {includeFilters} = HookupStore;
  const {includesFilters} = FiendEntryStore;
  useEffect(() => {
    if (title === 'Activities' && includeFilters.activity > 0) {
      setStyle([DataStyle.buttonText, {color: COLOR.PINK}]);
    } else if (title === 'Activities' && includeFilters.activity === 0) {
      setStyle(DataStyle.buttonText);
    }
    if (title === 'Protection' && includeFilters.protection > 0) {
      setStyle([DataStyle.buttonText, {color: COLOR.PINK}]);
    } else if (title === 'Protection' && includeFilters.protection === 0) {
      setStyle(DataStyle.buttonText);
    }
    if (title === 'Substance' && includeFilters.substance > 0) {
      setStyle([DataStyle.buttonText, {color: COLOR.PINK}]);
    } else if (title === 'Substance' && includeFilters.substance === 0) {
      setStyle(DataStyle.buttonText);
    }
    if (title === 'Status' && includesFilters.status > 0) {
      setStyle([DataStyle.buttonText, {color: COLOR.PINK}]);
    } else if (title === 'Status' && includesFilters.status === 0) {
      setStyle(DataStyle.buttonText);
    }
    if (title === 'Position' && includesFilters.position > 0) {
      setStyle([DataStyle.buttonText, {color: COLOR.PINK}]);
    } else if (title === 'Position' && includesFilters.position === 0) {
      setStyle(DataStyle.buttonText);
    }
  }, [includeFilters, includesFilters]);

  return (
    <View
      style={
        last ? {} : {borderBottomColor: COLOR.WHITE, borderBottomWidth: 1}
      }>
      <Collapse isCollapsed={falg}>
        <CollapseHeader>
          <ButtonWithArrow
            onPress={() => {
              setflag(!falg);
            }}
            style={DataStyle.bottomButton}
            textStyle={style}
            title={title}
            icon="rightArrow"
            transformarrow
          />
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {array.map((el) => {
              return <ColapseButtonItem el={el} key={el} title={title} />;
            })}
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
});
