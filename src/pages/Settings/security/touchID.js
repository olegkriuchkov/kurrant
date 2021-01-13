import React from 'react';
import {View, Button} from 'react-native';
import TouchID from 'react-native-touch-id';
import COLOR from '../../../constants/COLOR';

const Touchid = () => {
  return (
    <View style={{height: '100%', backgroundColor: COLOR.GREY}}>
      <Button
        title="press"
        onPress={() =>
          TouchID.authenticate('to demo this react-native component', {
            unifiedErrors: false,
            passcodeFallback: false,
          })
            .then((success) => {
              alert('Authenticated Successfully');
            })
            .catch((error) => {
              alert('Authentication Failed');
            })
        }
      />
    </View>
  );
};

export default Touchid;
