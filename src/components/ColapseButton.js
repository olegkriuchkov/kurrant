import {
  Collapse,
  CollapseBody,
  CollapseHeader,
} from 'accordion-collapse-react-native';
import React from 'react';
import {View} from 'react-native';
import COLOR from '../constants/COLOR';
import DataStyle from '../style/page/Settings/DataStyle';
import ButtonWithArrow from './ButtonWithArrow';
import ColapseButtonItem from './ColapseButtonItem';

const ColapseButton = ({falg, setflag, title, array, last}) => (
  <View
    style={last ? {} : {borderBottomColor: COLOR.WHITE, borderBottomWidth: 1}}>
    <Collapse isCollapsed={falg}>
      <CollapseHeader>
        <ButtonWithArrow
          onPress={() => {
            setflag(!falg);
          }}
          style={DataStyle.bottomButton}
          textStyle={DataStyle.buttonText}
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
          {array.map((el) => (
            <ColapseButtonItem el={el} key={el} />
          ))}
        </View>
      </CollapseBody>
    </Collapse>
  </View>
);
export default ColapseButton;
