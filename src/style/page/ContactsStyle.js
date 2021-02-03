import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  scrollViewBlock: {},
  letterBlock: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.GREY,
    paddingVertical: 12,
  },
  letter: {
    fontSize: 15,
    paddingBottom: 20,
  },
  contact: {
    fontSize: 24,
    color: COLOR.NOTE,
    fontWeight: 'normal',
    paddingBottom: 15,
    paddingTop: 8,
    backgroundColor: COLOR.LIGHT_GREY,
  },
  mostFrequent: {},
  mostFrequentHookups: {
    color: COLOR.NOTE,
    fontSize: 24,
    paddingBottom: 15,
  },
  bottomBorder: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  contentContainer: {
    paddingHorizontal: 18,
  },
  mostFrequentContent: {
    backgroundColor: COLOR.LIGHT_GREY,
    paddingTop: 23,
  },
});
