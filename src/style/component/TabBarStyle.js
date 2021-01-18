import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  tabBar: {
    flex: 1,
    borderColor: 'black',
    height: 100,
    width: '100%',
    backgroundColor: 'black',
  },
  main: {
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderTopColor: COLOR.NAVBARBORDER,
    borderColor: COLOR.WHITE,
    borderWidth: 1,
  },
  image: {width: 25, height: 28, marginTop: 10},
});
