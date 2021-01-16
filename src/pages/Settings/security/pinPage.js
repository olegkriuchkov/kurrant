import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import DataStyle from '../../../style/page/Settings/DataStyle';
import PinStyle from '../../../style/page/Settings/PinStyle';

const PinPage = () => {
  const [pin, setPin] = useState('');
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
        value={pin}
        onTextChange={(code) => {
          setPin(code);
        }}
      />
    </View>
  );
};

export default PinPage;
