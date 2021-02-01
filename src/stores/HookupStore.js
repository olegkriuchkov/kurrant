import {makeObservable, observable, action, toJS, reaction} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import COLOR from '../constants/COLOR';

class HookupStore {
  @observable hookups = [];

  @observable date = '';

  @observable hookupItem = [];

  @observable note = '';

  markedHookups = {};

  @observable hookupSuccess = true;

  @observable friendEntrySuccess = true;

  @observable friendEntryNote = '';

  @observable name = '';

  @action setHookupItem = (item) => {
    const currentItem = this.hookupItem.find((e) => e.id === item.id);
    const currentSingleItem = this.hookupItem.find(
      (e) => e.title === item.title && e.single,
    );
    if (currentSingleItem) {
      this.hookupItem = this.hookupItem.filter((e) => e !== currentSingleItem);
    }
    if (currentItem) {
      currentItem.result = item.result;
      this.hookupItem = this.hookupItem.filter((e) => e.result.length > 0);
    } else {
      this.hookupItem.push(item);
    }
  };

  @action setFriendNote = (note) => {
    this.friendEntryNote = note;
  };

  @action clearForm = () => {
    this.hookupItem = [];
    this.name = '';
    this.note = '';
  };

  @action setHookupSuccess = (bool) => {
    this.hookupSuccess = bool;
  };

  @action setHookups = async (id) => {
    this.getHookups();
    const currentHookup =
      this.hookups !== null ? this.hookups.find((e) => e.id === id) : false;
    if (currentHookup) {
      this.removeHookup();

      currentHookup.hookup = this.hookupItem;
      currentHookup.name = this.name;
      currentHookup.note = this.note;
      this.hookups = this.hookups.filter((e) => e.hookup.length > 0);
      this.setAsyncHookups();
    } else {
      this.removeHookup();
      this.hookups.push({
        date: this.date,
        hookup: this.hookupItem,
        note: this.note,
        name: this.name,
        id,
        type: 'hookup',
      });
      this.setAsyncHookups();
    }
  };

  @action setAsyncHookups = async () => {
    try {
      const hookups = JSON.stringify(this.hookups);
      await AsyncStorage.setItem(`@Hookups`, hookups);
    } catch (e) {
      throw new Error('Something wrong', e);
    }
  };

  @action removeHookup = async () => {
    try {
      await AsyncStorage.removeItem(`@Hookups`);
    } catch (e) {
      throw new Error(e);
    }
  };

  @action getHookups = async () => {
    const result = JSON.parse(await AsyncStorage.getItem('@Hookups'));
    try {
      this.hookups = result !== null ? result : [];
    } catch (e) {
      throw new Error(e);
    }
    this.markedHookupDate();
  };

  @action deleteHookup = (id) => {
    this.hookups = this.hookups.filter((e) => e.id !== id);
    this.setHookupSuccess(true);
  };

  @action setName = (name) => {
    this.name = name;
  };

  @action setHookupDate = (date) => {
    this.date = date;
  };

  @action setHookupNote = (note) => {
    this.note = note;
  };

  @action markedHookupDate = () => {
    let result = {};
    this.hookups.forEach((e) => {
      result = {
        ...result,
        [moment(e.date).format('YYYY-MM-DD')]: {
          customStyles: {
            container: {
              backgroundColor: COLOR.PINK,
              borderRadius: 10,
            },
            text: {
              color: COLOR.WHITE,
              opacity: 1,
            },
          },
        },
      };
    });
    this.markedHookups = {...this.markedHookups, ...result};
  };

  constructor() {
    reaction(
      () => this.hookups.length,
      () => this.getHookups(),
    );
    makeObservable(this);
  }
}

export default new HookupStore();
