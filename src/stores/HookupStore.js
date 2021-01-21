import {makeObservable, observable, action, toJS, reaction} from 'mobx';

class HookupStore {
  @observable Hookups = [];

  @observable Date = '';

  @observable HookupItem = [];

  @observable Note = '';

  @observable HookupSuccess = true;

  @observable Name = '';

  @action setHookupItem = (item) => {
    this.HookupItem.push({...item, id: item.id});
    console.log(toJS(this.HookupItem));
  };

  @action setHookupSuccess = (bool) => {
    this.HookupSuccess = bool;
  };

  @action setHookups = () => {
    this.Hookups.push({
      date: this.Date,
      hookup: this.HookupItem,
      note: this.Note,
      name: this.Name,
    });
    console.log(toJS(this.HookupItem));
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
