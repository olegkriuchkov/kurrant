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

  @action clearTestItem = () => {
    this.TestItem = [];
    this.Note = '';
  };

  @action setTestsItem = (item) => {
    const currentItem = this.TestItem.find((e) => e.id === item.id);
    if (currentItem) {
      currentItem.result = item.result;
      this.TestItem = this.TestItem.filter((e) => e.result.length > 0);
    } else {
      this.TestItem.push(item);
    }
    console.log(toJS(this.TestItem));
  };

  @action setTest = (id) => {
    const currentTest = this.TestItem.find((e) => e.id === id);
    if (currentTest) {
      currentTest.test = this.TestItem;
      currentTest.note = this.Note;
      this.Tests = this.TestItem.filter((e) => e.test.length > 0);
    } else {
      this.Tests.push({
        date: this.Date,
        test: this.TestItem,
        note: this.Note,
        id,
      });
    }
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
