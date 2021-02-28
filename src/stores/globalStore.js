import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeObservable, observable} from 'mobx';

class GlobalStore {
  @observable globalState = {selectedTab: 'home'};

  @observable password = '';

  @observable auth = false;

  @observable currentNote = '';

  @observable asyncPass = '';

  @observable confirmPassword = false;

  @action setCurrentNote = (text) => {
    this.currentNote = text;
  };

  @action setAuth = (bool) => {
    this.auth = bool;
  };

  @action setPassword = (text) => {
    this.password = text;
  };

  @action setAsyncPass = async () => {
    try {
      const pass = JSON.stringify(this.password);
      await AsyncStorage.setItem(`@Pass`, pass);
    } catch (e) {
      throw new Error('pass ', e);
    }
  };

  @action getAsyncPass = async () => {
    const result = JSON.parse(await AsyncStorage.getItem('@Pass'));
    try {
      this.asyncPass = result !== null ? result : '';
    } catch (e) {
      throw new Error(e);
    }
  };

  @action setConfirmPassword = (bool) => {
    this, (this.confirmPassword = bool);
  };

  @action setSelectedTab = (tabName) => {
    this.globalState.selectedTab = tabName;
  };

  constructor() {
    makeObservable(this);
  }
}

const globalStore = new GlobalStore();
export default globalStore;
