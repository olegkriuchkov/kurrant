import {makeObservable, observable, action} from 'mobx';

class TestsStore {
  @observable Tests = [];

  @observable Date = '';

  @observable TestItem = [];

  @observable Note = '';

  @action setTestsItem = (item) => {
    this.TestItem.push(item);
  };

  @action setTest = () => {
    this.Tests.push({date: this.Date, test: this.TestItem, note: this.Note});
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
