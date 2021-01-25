import {makeObservable, observable, action, toJS} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class HookupStore {
  @observable hookups = [];

  @observable date = '';

  @observable hookupItem = [];

  @observable note = '';

  @observable hookupSuccess = true;

  @observable keys = [];

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
      });

      this.keys.includes('@Hookups')
        ? this.mergeHookup()
        : this.setAsyncHookups();
      this.getHookups();
      this.getAllKeys();
    }
  };

  // TODO multi merge https://react-native-async-storage.github.io/async-storage/docs/api#multimerge
  // TODO перезаписывается сет айтем
  @action mergeHookup = async () => {
    try {
      await AsyncStorage.mergeItem('@Hookups', JSON.stringify(this.hookups));
      const getHiikup = await AsyncStorage.getItem('@Hookups');
      console.log(JSON.parse(getHiikup));
    } catch (e) {
      console.log(e);
    }
  };

  @action getAllKeys = async () => {
    try {
      this.keys = await AsyncStorage.getAllKeys();
      console.log(toJS(this.keys));
    } catch (e) {
      throw new Error(e);
    }
  };

  @action setAsyncHookups = async () => {
    try {
      const hookups = JSON.stringify(this.hookups);
      await AsyncStorage.setItem('@Hookups', hookups);
    } catch (e) {
      throw new Error('Something wrong', e);
    }
  };

  @action getHookups = async () => {
    try {
      const hookups = await AsyncStorage.getItem('@Hookups');
      console.log(JSON.parse(hookups));
      return hookups != null ? JSON.parse(hookups) : null;
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
