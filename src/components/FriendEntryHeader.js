import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import globalStore from '../stores/globalStore';
import Image from './Image';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import Tabs from './Tabs';
import HookupStore from '../stores/HookupStore';

export default observer(({calendar, tabs}) => {
  const [select, setSelect] = useState(true);
  const [id, setId] = useState(uuidv4());

  const {
    setHookups,
    setHookupDate,
    clearForm,
    setHookupSuccess,
    setName,
    name,
    hookupSuccess,
  } = HookupStore;
  useEffect(() => {
    setHookupDate(new Date());
  }, []);
  const save = () => {
    setHookups(id);
    setHookupSuccess(false);
  };

  const home = () => {
    Actions.replace('Home');
    setHookupSuccess(true);
    clearForm();
  };
  return (
    <View style={TestsHeaderStyle.mainStyle}>
      <View style={TestsHeaderStyle.mainWrapper}>
        <View>
          <Image
            onPress={() => home()}
            path={require('../assets/back.png')}
            style={TestsHeaderStyle.backImage}
          />
          <View style={TestsHeaderStyle.titlewrapper}>
            <View style={TestsHeaderStyle.headWrapper}>
              <View style={TestsHeaderStyle.columnWrapper}>
                {!hookupSuccess ? (
                  <Text style={TestsHeaderStyle.inputStyle}>{name}</Text>
                ) : (
                  <TextInput
                    onChangeText={(text) => setName(text)}
                    placeholder="Enter name"
                    style={TestsHeaderStyle.inputStyle}
                    value={name}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
        {hookupSuccess && (
          <Image
            style={TestsHeaderStyle.image}
            containerStyle={TestsHeaderStyle.imageWrapper}
            onPress={() => save()}
            path={require('../assets/okButton.png')}
          />
        )}
      </View>
      <View style={TestsHeaderStyle.mainTabsWrapper}>
        <Tabs
          tabs={tabs}
          onPress={(tabId) => setSelect(tabId)}
          defaultTab={tabs[0]}
        />
      </View>
    </View>
  );
});
