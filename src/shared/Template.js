import React from 'react';
import {SafeAreaView} from 'react-native';

export default ({children}: TemplateProps) => (
  <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
);
