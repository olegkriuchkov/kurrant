import {StyleSheet} from 'react-native';
import COLOR from '../../../constants/COLOR';

export default StyleSheet.create({
  button: {
    width: '95%',
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: COLOR.GREY,
    borderBottomColor: COLOR.WHITE,
  },
  main: {height: '100%', backgroundColor: COLOR.GREY},
  redButtonText: {color: COLOR.PINK, fontSize: 24, fontWeight: '600'},
  buttonText: {color: COLOR.WHITE, fontSize: 24, fontWeight: '600'},
  bottomButton: {
    width: '95%',
    marginHorizontal: 10,
  },
});
