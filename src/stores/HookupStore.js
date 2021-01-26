import {makeObservable, observable, action, toJS, reaction} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HookupStore {
  @observable hookups = [];

  @observable date = '';

  @observable hookupItem = [];

  @observable note = '';

  @observable hookupSuccess = true;

  @observable keys = [];

  @observable asyncHookups = [];

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

  @action clearForm = () => {
    this.hookupItem = [];
    this.name = '';
    this.note = '';
  };

  @action removeAsyncHookups = () => {
    this.asyncHookups = [];
  };

  @action setHookupSuccess = (bool) => {
    this.hookupSuccess = bool;
  };

  @action setHookups = async (id) => {
    const currentHookup = this.hookups.find((e) => e.id === id);
    if (currentHookup) {
      currentHookup.hookup = this.hookupItem;
      currentHookup.name = this.name;
      currentHookup.note = this.note;
      this.hookups = this.hookups.filter((e) => e.hookup.length > 0);
    } else {
      this.hookups.push({
        date: this.date,
        hookup: this.hookupItem,
        note: this.note,
        name: this.name,
        id,
        type: 'hookup',
      });
    }
    if (this.keys.includes(`@${id}`)) {
      this.removeHookup(id);
    }
    this.setAsyncHookups(id);
    this.getAllKeys();
  };

  @action setAsyncHookups = async (id) => {
    try {
      const hookups = JSON.stringify(this.hookups);
      await AsyncStorage.setItem(`@${id}`, hookups);
    } catch (e) {
      throw new Error('Something wrong', e);
    }
  };

  @action getAllKeys = async () => {
    try {
      this.keys = await AsyncStorage.getAllKeys();
      console.log('ALL kaeys', toJS(this.keys));
    } catch (e) {
      throw new Error(e);
    }
  };

  @action removeHookup = async (id) => {
    try {
      await AsyncStorage.removeItem(`@${id}`);
    } catch (e) {
      throw new Error(e);
    }
  };

  @action getHookups = async (id) => {
    try {
      this.asyncHookups = [
        ...this.asyncHookups,
        ...JSON.parse(await AsyncStorage.getItem(id)),
      ];
    } catch (e) {
      throw new Error(e);
    }
  };

  @action deleteHookup = (id) => {
    this.hookups = this.hookups.filter((e) => e.id !== id);
    this.setHookupSuccess(true);
    console.log(toJS(this.hookups));
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

  constructor() {
    makeObservable(this);
  }
}

export default new HookupStore();
