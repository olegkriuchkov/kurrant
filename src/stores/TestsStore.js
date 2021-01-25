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
    console.log('TestItem', toJS(this.testItems));
  };

  @action setTest = (id) => {
    const currentTest = this.tests.find((e) => e.id === id);
    if (currentTest) {
      currentTest.test = this.testItems;
      currentTest.note = this.note;
      this.tests = this.tests.filter((e) => e.test.length > 0);
    } else {
      this.tests.push({
        date: this.date,
        test: this.testItems,
        note: this.note,
        id,
      });
    }
    console.log('TESTRESULT', toJS(this.tests));
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
