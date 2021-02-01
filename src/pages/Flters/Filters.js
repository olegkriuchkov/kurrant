import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import ButtonWithArrow from '../../components/ButtonWithArrow';
import DataStyle from '../../style/page/Settings/DataStyle';
import COLOR from '../../constants/COLOR';

const Filters = () => {
  const [colapse, setColapse] = useState(false);
  const [position, setPosition] = useState(false);
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
      <Collapse isCollapsed={colapse}>
        <CollapseHeader>
          <ButtonWithArrow
            onPress={() => {
              setColapse(!colapse);
            }}
            style={DataStyle.button}
            textStyle={DataStyle.buttonText}
            title="Status"
            icon="rightArrow"
          />
        </CollapseHeader>
        <CollapseBody>
          <Text>Ta daa!</Text>
        </CollapseBody>
      </Collapse>
      <Collapse isCollapsed={position}>
        <CollapseHeader>
          <ButtonWithArrow
            onPress={() => {
              setPosition(!position);
            }}
            style={DataStyle.bottomButton}
            textStyle={DataStyle.buttonText}
            title="Position"
            icon="rightArrow"
          />
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                margin: 10,
                width: '44%',
                borderRadius: 20,
                backgroundColor: COLOR.WHITE,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Negative</Text>
            </View>
            <View
              style={{
                margin: 10,
                width: '44%',
                borderRadius: 20,
                backgroundColor: COLOR.WHITE,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'justify'}}>Negative, on PrEP</Text>
            </View>
            <View
              style={{
                margin: 10,
                width: '44%',
                borderRadius: 20,
                backgroundColor: COLOR.WHITE,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>Positive</Text>
            </View>
            <View
              style={{
                margin: 10,
                width: '44%',
                borderRadius: 20,
                backgroundColor: COLOR.WHITE,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Positive, U</Text>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default Filters;
