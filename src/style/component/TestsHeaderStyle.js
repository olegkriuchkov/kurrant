import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  mainStyle: {
    backgroundColor: COLOR.WHITE,
    justifyContent: 'space-between',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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
  backImage: {width: 30, height: 30},
  titlewrapper: {marginTop: 15},
  titleText: {fontSize: 24, color: COLOR.PINK},
  headWrapper: {flexDirection: 'row', alignItems: 'center'},
  columnWrapper: {flexDirection: 'column'},
  date: {fontSize: 24},
  mainTabsWrapper: {flexDirection: 'row', marginBottom: 0, marginRight: 5},
});
