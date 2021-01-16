import React from 'react';
import {SafeAreaView} from 'react-native';

export default ({children}) => (
  <SafeAreaView
    style={{flex: 1}}
    forceInset={{top: 'always', bottom: 'always'}}>
    {children}
  </SafeAreaView>
);
