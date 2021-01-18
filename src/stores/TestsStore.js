import {makeObservable, observable, action} from 'mobx';

class TestsStore {
  @observable Test = [];

  @observable TestItem = [];

  @action setTestsItem = (item) => {
    this.TestItem.includes(item)
      ? (this.TestItem = this.TestItem.filter((e) => e !== item))
      : this.TestItem.push(item);
  };

  constructor() {
    makeObservable(this);
  }
}

export default new TestsStore();
