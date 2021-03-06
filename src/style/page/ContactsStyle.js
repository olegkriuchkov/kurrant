import {StyleSheet} from 'react-native';
import COLOR from '../../constants/COLOR';

export default StyleSheet.create({
  clearSearchButton: {
    alignSelf: 'center',
    borderRadius: 15,
    borderColor: COLOR.TAB_ICON,
    borderWidth: 1,
    padding: 13,
  },
  clearButtonText: {fontSize: 18, color: COLOR.TAB_ICON},
  scrollViewBlock: {height: '100%', backgroundColor: COLOR.LIGHT_GREY},
  contentContainer: {
    marginHorizontal: 20,
  },
  mostFrequentContainer: {
    backgroundColor: COLOR.LIGHT_GREY,
  },
  letterContainer: {
    marginHorizontal: 20,
    paddingTop: 13,
    paddingBottom: 20,
  },
  letter: {
    fontSize: 15,
    color: COLOR.NOTE,
  },
  contactsBlock: {
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingBottom: 15,
    paddingTop: 8,
    justifyContent: 'space-between',
  },
  contact: {
    fontSize: 24,
    color: COLOR.NOTE,
    fontWeight: 'normal',
  },
  mostFrequent: {
    color: '#727272',
    fontSize: 15,
  },
  titleContainer: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.BORDER_BOTTOM,
  },
  mostFrequentHookups: {
    color: COLOR.NOTE,
    fontSize: 24,
  },
  topBorder: {
    borderTopColor: COLOR.BORDER_BOTTOM,
    borderTopWidth: 1,
  },
  bottomBorder: {
    borderBottomColor: COLOR.BORDER_BOTTOM,
    borderBottomWidth: 1,
  },
});
