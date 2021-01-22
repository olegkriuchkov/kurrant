import {makeObservable, observable, action, toJS} from 'mobx';

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
    console.log('TESTITEM', toJS(this.testItems));
  };

  @action setTest = (id) => {
    const currentTest = this.testItems.find((e) => e.id === id);
    if (currentTest) {
      currentTest.tests = this.testItems;
      currentTest.note = this.note;
      this.tests = this.testItems.filter((e) => e.test.length > 0);
    } else {
      this.tests.push({
        date: this.date,
        test: this.testItems,
        note: this.note,
        id,
      });
    }
    console.log(toJS(this.tests));
  };

  @action setTestDate = (date) => {
    this.date = date;
  };

  @action deleteHookup = (id) => {
    this.tests = this.tests.filter((e) => e.id !== id);
  };

  @action setTestNote = (note) => {
    this.note = note;
  };

  constructor() {
    makeObservable(this);
  }
}

export default new TestsStore();
