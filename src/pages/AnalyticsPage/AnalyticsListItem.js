import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import COLOR from '../../constants/COLOR';
import Arrow from '../../components/icons/Arrow';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 20,
    borderBottomColor: COLOR.WHITE,
    borderBottomWidth: 1,
  },
  button: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: COLOR.WHITE,
  },
  date: {
    marginRight: 45,
  },
});

const ItemWrapper = ({onPress, children}) => (
  <>
    {onPress ? (
      <TouchableOpacity style={[styles.container, styles.button]}>
        {children}
      </TouchableOpacity>
    ) : (
      <View style={styles.container}>{children}</View>
    )}
  </>
);

export const AnalyticsListItem = ({item, onPress}) => {
  return (
    <ItemWrapper onPress={onPress}>
      {item.date && (
        <Text style={[styles.text, styles.date]}>
          {moment(item.date).format('MMM DD')}
        </Text>
      )}
      <Text style={styles.text}>{item.text}</Text>
      {onPress && <Arrow />}
    </ItemWrapper>
  );
};
