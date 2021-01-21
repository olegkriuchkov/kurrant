import {makeObservable, observable, action, toJS, reaction} from 'mobx';
import {log} from 'react-native-reanimated';

class HookupStore {
  @observable Hookups = [];

  @observable Date = '';

  @observable HookupItem = [];

  @observable Note = '';

  @observable HookupSuccess = true;

  @observable Name = '';

  @action setHookupItem = (item) => {
    const currentItem = this.HookupItem.find((e) => e.id === item.id);
    const currentSingleItem = this.HookupItem.find(
      (e) => e.title === item.title && e.single,
    );
    if (currentSingleItem) {
      this.HookupItem = this.HookupItem.filter((e) => e !== currentSingleItem);
    }
    if (currentItem) {
      currentItem.result = item.result;
      this.HookupItem = this.HookupItem.filter((e) => e.result.length > 0);
    } else {
      this.HookupItem.push(item);
    }

    console.log(toJS(this.HookupItem));
  };

  @action clearForm = () => {
    this.HookupItem = [];
    this.Name = '';
    this.Note = '';
  };

  @action setHookupSuccess = (bool) => {
    this.HookupSuccess = bool;
  };

  @action setHookups = (id) => {
    const currentHookup = this.Hookups.find((e) => e.id === id);
    if (currentHookup) {
      currentHookup.hookup = this.HookupItem;
      currentHookup.name = this.Name;
      currentHookup.note = this.Note;
      this.Hookups = this.Hookups.filter((e) => e.hookup.length > 0);
    } else {
      this.Hookups.push({
        date: this.Date,
        hookup: this.HookupItem,
        note: this.Note,
        name: this.Name,
        id,
      });
    }

    console.log(toJS(this.Hookups));
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
