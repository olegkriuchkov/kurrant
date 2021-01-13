import {StyleSheet} from 'react-native';
import COLOR from '../../../constants/COLOR';

export default StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: COLOR.GREY,
    alignItems: 'center',
  },

  textWrapper: {
    marginBottom: 90,
    borderColor: COLOR.GREY,
    borderBottomColor: COLOR.WHITE,
    borderWidth: 1,
    width: '90%',
    paddingBottom: 10,
    alignItems: 'center',
  },
  buttonText: {color: COLOR.WHITE, fontSize: 24, fontWeight: '800'},
  bottomButton: {
    width: '95%',
    marginHorizontal: 10,
  },
  mask: {
    width: 15,
    height: 15,
    borderRadius: 25,
    backgroundColor: COLOR.WHITE,
  },
});
