import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import TouchID from 'react-native-touch-id';
import globalStore from '../stores/globalStore';
import DataStyle from '../style/page/Settings/DataStyle';
import PinStyle from '../style/page/Settings/PinStyle';
import Image from './Image';

export default observer(() => {
  const {getAsyncPass, asyncPass, setConfirmPassword, setAuth} = globalStore;
  const [pass, setPass] = useState('');
  useEffect(() => {
    getAsyncPass();
  }, []);

  if (asyncPass === pass && pass?.length > 0) {
    setAuth(true);
    setConfirmPassword(true);
    Actions.Home();
  }
  if (pass.length === 4) {
    setPass('');
  }
  return (
    <View style={PinStyle.main}>
      <View style={{marginTop: 100, width: '100%', alignItems: 'center'}}>
        <View style={PinStyle.textWrapper}>
          <Text style={DataStyle.buttonText}>Enter 4-digit PIN</Text>
        </View>
        <SmoothPinCodeInput
          placeholder={<View style={PinStyle.mask} />}
          mask={<View style={PinStyle.mask} />}
          maskDelay={1000}
          password={true}
          cellStyle={null}
          cellStyleFocused={null}
          value={pass}
          onTextChange={(code) => {
            setPass(code);
          }}
        />
      </View>
      <Image
        path={require('../assets/finger.png')}
        onPress={() =>
          TouchID.authenticate('to demo this react-native component', {
            unifiedErrors: false,
            passcodeFallback: false,
          })
            .then((success) => {
              setAuth(true);
              setConfirmPassword(true);
              Actions.Home();
            })
            .catch((error) => {
              alert('Authentication Failed');
            })
        }
        style={{width: 40, height: 40, marginTop: 300}}
      />
    </View>
  );
});
