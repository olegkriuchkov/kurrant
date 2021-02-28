import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import 'react-native-get-random-values';
import {Actions} from 'react-native-router-flux';
import {v4 as uuidv4} from 'uuid';
import COLOR from '../constants/COLOR';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import TestsHeaderStyle from '../style/component/TestsHeaderStyle';
import GoogleSearch from './GoogleSearch';
import Image from './Image';
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
  const [favorite, setFavorite] = useState(false);
  const {globalState} = globalStore;
  const {
    setFiendSucess,
    friendEntrySuccess,
    clearForm,
    name,
    location,
    setLocation,

    setContacts,
    clearItem,
    deleteContact,
    contactID,
    setContacID,
    setName,
    contact,
    locationFlag,
    setLocationFlag,
  } = FiendEntryStore;
  const deleteItem = () => {
    if (contactID) {
      deleteContact(contactID);
      setContacID(null);
      setCurrentName({
        currentName: null,
        currentLocation: null,
      });
      clearItem();
    } else {
      deleteContact(id);
      setContacID(null);
      clearItem();
    }
  };
  const save = () => {
    if (name || nameCurrent?.currentName) {
      if (contactID) {
        setContacts(contactID, favorite);
        setFiendSucess(!friendEntrySuccess);
      } else {
        setContacts(friendId, favorite);
        setFiendSucess(!friendEntrySuccess);
      }
    } else {
      Alert.alert(
        '',
        'Pleas enter the name',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    }
  };

  useEffect(() => {
    setCurrentName({
      currentName: null,
      currentLocation: null,
    });
  }, [contactID]);
  useEffect(() => {
    const currentContact = contact?.find((e) => e.friendId === contactID);
    setCurrentName({
      currentName: currentContact?.name,
      currentLocation: currentContact?.location,
    });
    setFavorite(currentContact?.favorite);
  }, [contactID, globalState.selectedTab, contact]);

  const home = () => {
    setFiendSucess(true);
    clearForm();
    clearItem();
    setCurrentName();
    if (contactID) {
      setFiendSucess(false);
      Actions.pop();
    } else Actions.pop();
  };
  return (
    <View style={TestsHeaderStyle.mainStyle}>
      {!locationFlag && (
        <View style={TestsHeaderStyle.mainWrapper}>
          <View>
            <Image
              onPress={() => home()}
              path={require('../assets/back.png')}
              style={TestsHeaderStyle.backImage}
            />
            <View style={TestsHeaderStyle.titlewrapper}>
              <View
                style={[
                  TestsHeaderStyle.headWrapper,
                  {flexDirection: 'column'},
                ]}>
                <View
                  style={[
                    TestsHeaderStyle.columnWrapper,
                    {alignSelf: 'flex-start'},
                  ]}>
                  {!friendEntrySuccess || nameCurrent?.currentName ? (
                    <Text style={TestsHeaderStyle.inputStyle}>
                      {nameCurrent?.currentName || name || 'No name'}
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
                  {!friendEntrySuccess || nameCurrent?.currentLocation ? (
                    <Text style={TestsHeaderStyle.inputStyle}>
                      {nameCurrent?.currentLocation?.length > 15
                        ? nameCurrent?.currentLocation.slice(0, 15)
                        : nameCurrent?.currentLocation ||
                          location ||
                          'No location'}
                    </Text>
                  ) : (
                    !friendName && (
                      <TouchableOpacity
                        style={TestsHeaderStyle.inputStyle}
                        onPress={() => setLocationFlag(true)}>
                        <Text style={{fontSize: 24}}>
                          {location.length > 15
                            ? location.slice(0, 15)
                            : location || 'Location'}
                        </Text>
                      </TouchableOpacity>
                    )
                  )}
                </View>
              </View>
            </View>
          </View>

          {friendEntrySuccess && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {!favorite && (
                <Image
                  style={[TestsHeaderStyle.undDeleteImage, {margin: 20}]}
                  path={require('../assets/star.png')}
                  onPress={() => {
                    setFavorite(true);
                  }}
                />
              )}
              {favorite && (
                <Image
                  style={[TestsHeaderStyle.undDeleteImage, {margin: 20}]}
                  path={require('../assets/selectStar.png')}
                  onPress={() => {
                    setFavorite(false);
                  }}
                />
              )}
              <Image
                style={TestsHeaderStyle.image}
                containerStyle={TestsHeaderStyle.imageWrapper}
                onPress={() => save()}
                path={require('../assets/okButton.png')}
              />
            </View>
          )}
          {!friendEntrySuccess && (
            <View style={{flexDirection: 'row'}}>
              {!favorite && (
                <Image
                  style={[TestsHeaderStyle.undDeleteImage, {right: 30}]}
                  path={require('../assets/star.png')}
                  onPress={() => {
                    friendEntrySuccess && setFavorite(true);
                  }}
                />
              )}
              {favorite && (
                <Image
                  style={[TestsHeaderStyle.undDeleteImage, {right: 30}]}
                  path={require('../assets/selectStar.png')}
                  onPress={() => {
                    friendEntrySuccess && setFavorite(false);
                  }}
                />
              )}
              <Image
                style={TestsHeaderStyle.changeImage}
                path={require('../assets/change.png')}
                onPress={() => {
                  setFiendSucess(true);
                  if (contactID) {
                    Actions.AddFriendEntry();
                  }
                }}
              />
              <Image
                style={TestsHeaderStyle.undDeleteImage}
                path={require('../assets/delete.png')}
                onPress={() => setDeleteFlag(true)}
              />
            </View>
          )}
        </View>
      )}
      {!locationFlag && (
        <View style={TestsHeaderStyle.mainTabsWrapper}>
          <Tabs
            tab={tabs}
            onPress={(tabId) => setSelect(tabId)}
            defaultTab={tabs[0]}
          />
        </View>
      )}
      {deleteFlag && !locationFlag && (
        <View style={TestsHeaderStyle.deletScreenWrapper}>
          <Image
            path={require('../assets/deleteConfirm.png')}
            containerStyle={{alignSelf: 'flex-end'}}
            style={TestsHeaderStyle.deleteImage}
            onPress={() => setDeleteFlag(false)}
          />
          <View style={TestsHeaderStyle.mainDeleteTextWrapper}>
            <TouchebleText
              text="Delete contact?"
              containerStyle={TestsHeaderStyle.deleteTextWrapper}
              style={TestsHeaderStyle.mainDeleteText}
            />
            <TouchebleText
              text="Delete contact"
              containerStyle={[
                TestsHeaderStyle.deleteTextWrapper,
                {marginTop: 5},
              ]}
              style={TestsHeaderStyle.deleteText}
              onPress={() => {
                deleteItem();
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
      {locationFlag && (
        <View style={{height: '100%', backgroundColor: COLOR.TAB_ICON}}>
          <GoogleSearch />
        </View>
      )}
    </View>
  );
});
