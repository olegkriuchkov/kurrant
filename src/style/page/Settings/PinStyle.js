import {StyleSheet} from 'react-native';
import COLOR from '../../../constants/COLOR';

export default StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: COLOR.GREY,
    alignItems: 'center',
    paddingTop: 20,
  },

  textWrapper: {
    marginBottom: 90,
    borderColor: COLOR.GREY,
    borderBottomColor: COLOR.WHITE,
    borderWidth: 0.6,
    width: '90%',
    paddingBottom: 10,
    alignItems: 'center',
  },
  buttonText: {color: COLOR.WHITE, fontSize: 24, fontWeight: '600'},
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
