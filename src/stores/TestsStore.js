import {makeObservable, observable, action, toJS, reaction} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {Actions} from 'react-native-router-flux';
import COLOR from '../constants/COLOR';

class TestsStore {
  @observable tests = [];

  @observable date = '';

  @observable testItems = [];

  markedTest = {};

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
        type: 'test',
      });
      this.setAsyncTests();
    }
  };

  @action setAsyncTests = async () => {
    try {
      const tests = JSON.stringify(this.tests);
      await AsyncStorage.setItem(`@Tests`, tests);
    } catch (e) {
      throw new Error('AsyncTest ', e);
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
    const result = JSON.parse(await AsyncStorage.getItem('@Tests'));
    try {
      this.tests = result !== null ? result : [];
    } catch (e) {
      throw new Error(e);
    }
    this.markedTestDate();
  };

  @action setTestDate = (date) => {
    this.date = date;
  };

  @action deleteTest = (id) => {
    this.getTests();

    this.tests = this.tests.filter((e) => e.id !== id);
    this.removeTests();
    this.setAsyncTests();
    Actions.replace('Home');

    this.setTestSuccess(true);
  };

  @action setTestNote = (note) => {
    this.note = note;
  };

  @action markedTestDate = () => {
    let result = {};

    this.tests.forEach((e) => {
      result = {
        ...result,
        [moment(e.date).format('YYYY-MM-DD')]: {
          customStyles: {
            container: {
              backgroundColor: COLOR.PINK,
              borderRadius: 50,
            },
            text: {
              color: COLOR.WHITE,
              opacity: 1,
            },
          },
        },
      };
    });
    this.markedTest = {...this.markedTest, ...result};
  };

  constructor() {
    reaction(
      () => this.tests.length,
      () => this.getTests(),
    );
    makeObservable(this);
  }
}

export default new TestsStore();
