import {makeObservable, observable, action, toJS} from 'mobx';

class TestsStore {
  @observable Tests = [];

  @observable Date = '';

  @observable TestItem = [];

  @observable Note = '';

  @observable TestSuccess = true;

  @action setTestSuccess = (bool) => {
    this.TestSuccess = bool;
  };

  @action setTestsItem = (item) => {
    this.TestItem.push(item);
  };

  @action setTest = () => {
    this.Tests.push({date: this.Date, test: this.TestItem, note: this.Note});
    console.log(toJS(this.Tests));
  };

  @action setTestDate = (date) => {
    this.Date = date;
  };

  @action setTestNote = (note) => {
    this.Note = note;
  };

  constructor() {
    makeObservable(this);
  }
}

export default new TestsStore();
