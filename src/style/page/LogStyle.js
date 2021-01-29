import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  main: {marginBottom: 5},
  title: {
    height: 50,
    marginBottom: 5,
    padding: 10,
  },
  titleText: {fontSize: 20, marginHorizontal: 10},
  name: {fontSize: 20},
  infoWrapper: {
    backgroundColor: COLOR.BACKGROUND,
    height: 80,
    padding: 10,
  },
  image: {width: 20, height: 20, marginRight: 10},
  time: {color: COLOR.PINK, marginBottom: 5},
  singletitle: {
    height: 50,
    marginBottom: 5,
    padding: 10,
    addingBottom: 17,
    borderColor: COLOR.BORDERBUTTOM,
    borderBottomWidth: 1,
  },
  itemWrapper: {marginHorizontal: 10, paddingBottom: 10},
  lastItemWrapper: {
    marginHorizontal: 10,
    paddingBottom: 17,
    borderColor: COLOR.BORDERBUTTOM,
    borderBottomWidth: 1,
  },
});
