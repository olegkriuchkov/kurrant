import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  mainStyle: {
    backgroundColor: COLOR.WHITE,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    justifyContent: 'space-between',
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: 'column',
    elevation: 10,
  },
  mainWrapper: {
    margin: 10,
    marginTop: 40,
    marginBottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
  },
  button: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  imageWrapper: {alignSelf: 'center'},
  image: {width: 70, height: 70},
  tabsWrapper: {flexDirection: 'row', marginBottom: 0},
  selected: {
    margin: 10,
    marginBottom: 0,
    borderWidth: 3.5,
    borderColor: COLOR.WHITE,
    paddingBottom: 7,
    borderBottomColor: COLOR.PINK,
  },
  unselected: {
    margin: 10,
    marginTop: 14,
    marginBottom: 0,
  },
  selectedText: {fontSize: 18, color: COLOR.PINK},
  unselectedText: {fontSize: 18, opacity: 0.5, color: COLOR.BLACK},
  noStyle: {height: 70},
});
