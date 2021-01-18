import {StyleSheet} from 'react-native';
import COLOR from '../../../constants/COLOR';

export default StyleSheet.create({
  info: {
    width: '95%',
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: COLOR.GREY,
    borderBottomColor: COLOR.WHITE,
    borderTopColor: COLOR.GREY,
    paddingBottom: 50,
  },
  infoText: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: '600',
  },
});
