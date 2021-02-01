import {toJS} from 'mobx';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import FiendEntryStore from '../stores/FiendEntryStore';
import Image from './Image';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import Tabs from './Tabs';
import TouchebleText from './TouchebleText';

export default observer(({tabs, friendName}) => {
  const [select, setSelect] = useState(true);
  const [id, setId] = useState(uuidv4());
  const [friendId, setFriendId] = useState(uuidv4());
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [nameCurrent, setCurrentName] = useState({
    currentName: null,
    currentLocation: null,
  });
  const {
    setFiendSucess,
    friendEntrySuccess,
    clearForm,
    name,
    location,
    setLocation,
    setContacts,
    deleteContact,
    contactID,
    setName,
    contact,
  } = FiendEntryStore;

  const save = () => {
    setContacts(contactID || friendId);
    setFiendSucess(!friendEntrySuccess);
  };
  const currentContact = contact?.find((e) => e.friendId === contactID);

  useEffect(() => {
    setCurrentName({
      currentName: null,
      currentLocation: null,
    });
    console.log('currentContact', toJS(currentContact));
  }, []);
  useEffect(() => {
    setCurrentName({
      currentName: currentContact.name,
      currentLocation: currentContact.location,
    });
    console.log(nameCurrent);
  }, []);
  const home = () => {
    Actions.replace('Home');
    setFiendSucess(true);
    clearForm();
    setCurrentName();
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
            <View
              style={[TestsHeaderStyle.headWrapper, {flexDirection: 'column'}]}>
              <View
                style={[
                  TestsHeaderStyle.columnWrapper,
                  {alignSelf: 'flex-start'},
                ]}>
                {!friendEntrySuccess || nameCurrent.currentName ? (
                  <Text style={TestsHeaderStyle.inputStyle}>
                    {nameCurrent.currentName || name || 'No name'}
                  </Text>
                ) : (
                  !friendName && (
                    <TextInput
                      onChangeText={(text) => setName(text)}
                      placeholder="Enter name"
                      style={TestsHeaderStyle.inputStyle}
                      value={name}
                    />
                  )
                )}
              </View>
              <View
                style={[
                  TestsHeaderStyle.columnWrapper,
                  {alignSelf: 'flex-start'},
                ]}>
                {!friendEntrySuccess || nameCurrent.currentLocation ? (
                  <Text style={TestsHeaderStyle.inputStyle}>
                    {nameCurrent.currentLocation || location || 'No location'}
                  </Text>
                ) : (
                  !friendName && (
                    <TextInput
                      onChangeText={(text) => setLocation(text)}
                      placeholder="Location"
                      style={TestsHeaderStyle.inputStyle}
                      value={location}
                    />
                  )
                )}
              </View>
            </View>
          </View>
        </View>

        {friendEntrySuccess && (
          <Image
            style={TestsHeaderStyle.image}
            containerStyle={TestsHeaderStyle.imageWrapper}
            onPress={() => save()}
            path={require('../assets/okButton.png')}
          />
        )}
        {!friendEntrySuccess && (
          <View style={{flexDirection: 'row'}}>
            {!friendName && (
              <Image
                style={TestsHeaderStyle.changeImage}
                path={require('../assets/change.png')}
                onPress={() => setFiendSucess(true)}
              />
            )}
            <Image
              style={TestsHeaderStyle.undDeleteImage}
              path={require('../assets/delete.png')}
              onPress={() => setDeleteFlag(true)}
            />
          </View>
        )}
      </View>
      <View style={TestsHeaderStyle.mainTabsWrapper}>
        <Tabs
          tabs={tabs}
          onPress={(tabId) => setSelect(tabId)}
          defaultTab={tabs[0]}
        />
      </View>
      {deleteFlag && (
        <View style={TestsHeaderStyle.deletScreenWrapper}>
          <Image
            path={require('../assets/deleteConfirm.png')}
            containerStyle={{alignSelf: 'flex-end'}}
            style={TestsHeaderStyle.deleteImage}
            onPress={() => setDeleteFlag(false)}
          />
          <View style={TestsHeaderStyle.mainDeleteTextWrapper}>
            <TouchebleText
              text="Delete entry?"
              containerStyle={TestsHeaderStyle.deleteTextWrapper}
              style={TestsHeaderStyle.mainDeleteText}
            />
            <TouchebleText
              text="Delete entry"
              containerStyle={[
                TestsHeaderStyle.deleteTextWrapper,
                {marginTop: 5},
              ]}
              style={TestsHeaderStyle.deleteText}
              onPress={() => {
                deleteContact(contactID || id);
              }}
            />
            <TouchebleText
              text="Cancel"
              containerStyle={TestsHeaderStyle.cancelWrapper}
              onPress={() => setDeleteFlag(false)}
              style={TestsHeaderStyle.deleteText}
            />
          </View>
        </View>
      )}
    </View>
  );
});
