import {StyleSheet} from 'react-native';
import COLOR from '../../../constants/COLOR';

export default StyleSheet.create({
  main: {
    backgroundColor: COLOR.BLUE,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mainItem: {
    width: '45%',
    height: '30%',
    borderRadius: 20,
    backgroundColor: COLOR.WHITE,
    margin: 5,
    marginTop: 15,
  },
  topItem: {
    height: '33%',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderColor: COLOR.WHITE,
    borderBottomColor: COLOR.BLUE,
  },
  midelItem: {
    height: '33%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomItem: {
    height: '33%',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderWidth: 1,
    borderBottomRightRadius: 20,
    borderTopColor: COLOR.BLUE,
    borderColor: COLOR.WHITE,
  },
});
