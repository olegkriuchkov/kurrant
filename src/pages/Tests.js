import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import COLOR from '../constants/COLOR';
import TestsStyle from '../style/page/Tests/TestsStyle';

const Tests = () => {
  const [flag, setFlag] = useState(false);
  return (
    <View style={TestsStyle.main}>
      <TouchableOpacity
        onPress={() => setFlag(true)}
        style={TestsStyle.mainItem}>
        {flag && (
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={TestsStyle.topItem}>
              <Text>Rectal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={TestsStyle.midelItem}>
              <Text>Throat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={TestsStyle.bottomItem}>
              <Text>Urine</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Tests;
