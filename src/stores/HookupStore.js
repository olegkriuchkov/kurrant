import {makeObservable, observable, action} from 'mobx';

class HookupStore {
  @observable Hookups = [];

  @observable Date = '';

  @observable HookupItem = [];

  @observable Note = '';

  @observable Name = '';

  @action setHookupItem = (item) => {
    this.HookupItem.push(item);
  };

  @action setHookups = () => {
    this.Hookups.push({
      date: this.Date,
      hookup: this.HookupItem,
      note: this.Note,
      name: this.Name,
    });
  };

  @action setName = (name) => {
    this.Name = name;
  };

  @action setHookupDate = (date) => {
    this.Date = date;
  };

  @action setHookupNote = (note) => {
    this.Note = note;
  };

  constructor() {
    makeObservable(this);
  }
}

export default new HookupStore();
