import {makeObservable, observable, action, toJS} from 'mobx';

class TestsStore {
  @observable Tests = [];

  @observable Date = '';

  @observable TestItems = [];

  @observable Note = '';

  @observable TestSuccess = true;

  @action setTestSuccess = (bool) => {
    this.TestSuccess = bool;
  };

  @action clearTestItem = () => {
    this.TestItems = [];
    this.Note = '';
  };

  @action setTestsItem = (item) => {
    const currentItem = this.TestItems.find((e) => e.id === item.id);
    if (currentItem) {
      currentItem.result = item.result;
      this.TestItems = this.TestItems.filter((e) => e.result.length > 0);
    } else {
      this.TestItems.push(item);
    }
    console.log('TESTITEM', toJS(this.TestItems));
  };

  @action setTest = (id) => {
    const currentTest = this.TestItems.find((e) => e.id === id);
    if (currentTest) {
      currentTest.test = this.TestItems;
      currentTest.note = this.Note;
      this.Tests = this.TestItems.filter((e) => e.test.length > 0);
    } else {
      this.Tests.push({
        date: this.Date,
        test: this.TestItems,
        note: this.Note,
        id,
      });
    }
    console.log(toJS(this.Tests));
  };

  @action setTestDate = (date) => {
    this.Date = date;
  };

  @action deleteHookup = (id) => {
    this.Tests = this.Tests.filter((e) => e.id !== id);
  };

  @action setTestNote = (note) => {
    this.Note = note;
  };

  constructor() {
    makeObservable(this);
  }
}

export default new TestsStore();
