import {observer} from 'mobx-react';
import React from 'react';
import {Text, View} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import globalStore from '../../../stores/globalStore';
import DataStyle from '../../../style/page/Settings/DataStyle';
import PinStyle from '../../../style/page/Settings/PinStyle';

export default observer(() => {
  const {password, setPassword} = globalStore;

  return (
    <View style={PinStyle.main}>
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
        value={password}
        onTextChange={(code) => {
          setPassword(code);
        }}
      />
    </View>
  );
});
