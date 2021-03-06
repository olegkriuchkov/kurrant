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
  inputStyle: {
    fontSize: 24,
    margin: 0,
    padding: 0,
  },
  deletScreenWrapper: {
    position: 'absolute',
    zIndex: 2,
    height: '1000%',
    opacity: 0.93,
    backgroundColor: 'white',
    width: '100%',
  },
  warning: {
    position: 'absolute',
    zIndex: 2,

    height: '1000%',
    opacity: 1,
    backgroundColor: 'white',
    width: '100%',
  },
  deleteImage: {width: 20, height: 20, margin: 20, marginTop: 40},
  mainDeleteTextWrapper: {margin: 20, marginVertical: 0},
  errorWrapper: {
    margin: 20,
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  deleteTextWrapper: {
    width: '100%',
    borderWidth: 1,
    borderBottomColor: COLOR.TOPLINE,
    paddingBottom: 10,
    borderColor: COLOR.WHITE,
  },
  deleteText: {fontSize: 24, color: COLOR.BLACK, opacity: 0.6},
  cancelWrapper: {
    width: '100%',
    marginTop: 5,
  },
  mainDeleteText: {fontSize: 24, color: COLOR.PINK},
  undDeleteImage: {width: 25, height: 25, marginLeft: 20},
  changeImage: {width: 25, height: 25},
});
