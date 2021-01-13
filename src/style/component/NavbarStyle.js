import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  mainStyle: {
    height: 70,
    backgroundColor: COLOR.WHITE,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    justifyContent: 'space-between',
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: 'row',
    elevation: 10,
  },
  noStyle: {height: 70},
});
