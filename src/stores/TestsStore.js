import {makeObservable, observable, action, toJS} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class TestsStore {
  @observable tests = [];

  @observable date = '';

  @observable testItems = [];

  @observable note = '';

  @observable testSuccess = true;

  @action setTestSuccess = (bool) => {
    this.testSuccess = bool;
  };

  @action clearTestItem = () => {
    this.testItems = [];
    this.note = '';
  };

  @action setTestsItem = (item) => {
    const currentItem = this.testItems.find((e) => e.id === item.id);
    if (currentItem) {
      currentItem.result = item.result;
      this.testItems = this.testItems.filter((e) => e.result.length > 0);
    } else {
      this.testItems.push(item);
    }
    console.log('TestItem', toJS(this.testItems));
  };

  @action setTest = (id) => {
    this.getTests();
    const currentTest =
      this.tests !== null ? this.tests.find((e) => e.id === id) : false;
    if (currentTest) {
      this.removeTests();
      currentTest.test = this.testItems;
      currentTest.note = this.note;
      this.tests = this.tests.filter((e) => e.test.length > 0);
      this.setAsyncTests();
    } else {
      this.removeTests();
      this.tests.push({
        date: this.date,
        test: this.testItems,
        note: this.note,
        id,
      });
      this.setAsyncTests();
    }
    console.log('TESTRESULT', toJS(this.tests));
  };

  @action setAsyncTests = async () => {
    try {
      const tests = JSON.stringify(this.tests);
      await AsyncStorage.setItem(`@Tests`, tests);
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

  @action removeTests = async () => {
    try {
      await AsyncStorage.removeItem(`@Tests`);
    } catch (e) {
      throw new Error(e);
    }
  };

  @action getTests = async () => {
    try {
      this.hookups =
        JSON.parse(await AsyncStorage.getItem('@Tests')) !== null
          ? JSON.parse(await AsyncStorage.getItem('@Tests'))
          : [];
    } catch (e) {
      throw new Error(e);
    }
  };

  @action setTestDate = (date) => {
    this.date = date;
  };

  @action deleteTest = (id) => {
    this.tests = this.tests.filter((e) => e.id !== id);
    this.setTestSuccess(true);
    console.log(toJS(this.tests));
  };

  @action setTestNote = (note) => {
    this.note = note;
  };

  constructor() {
    makeObservable(this);
  }
}

export default new TestsStore();
