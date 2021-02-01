import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  scrollViewBlock: {
    paddingHorizontal: 20,
  },
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
    color: 727272,
    fontWeight: 'normal',
    backgroundColor: '#F6F6F6',
    paddingBottom: 15,
    paddingTop: 8,
  },
  mostFrequent: {
    color: 727272,
    fontSize: 15,
    paddingBottom: 20,
    borderBottomColor: '#D5D5D5',
    borderBottomWidth: 1,
  },
  mostFrequentHookups: {
    color: 727272,
    fontSize: 24,
    paddingBottom: 15,
  },
  bottomBorder: {
    borderBottomColor: '#D5D5D5',
    borderBottomWidth: 1,
  },
});
