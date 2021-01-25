import {makeObservable, observable, action, toJS} from 'mobx';

class HookupStore {
  @observable hookups = [];

  @observable date = '';

  @observable hookupItem = [];

  @observable note = '';

  @observable hookupSuccess = true;

  @observable name = '';

  @action setHookupItem = (item) => {
    const currentItem = this.hookupItem.find((e) => e.id === item.id);
    const currentSingleItem = this.hookupItem.find(
      (e) => e.title === item.title && e.single,
    );
    if (currentSingleItem) {
      this.hookupItem = this.hookupItem.filter((e) => e !== currentSingleItem);
    }
    if (currentItem) {
      currentItem.result = item.result;
      this.hookupItem = this.hookupItem.filter((e) => e.result.length > 0);
    } else {
      this.hookupItem.push(item);
    }
    console.log('HookupItem', toJS(this.hookupItem));
  };

  @action clearForm = () => {
    this.hookupItem = [];
    this.name = '';
    this.note = '';
  };

  @action setHookupSuccess = (bool) => {
    this.hookupSuccess = bool;
  };

  @action setHookups = (id) => {
    const currentHookup = this.hookups.find((e) => e.id === id);
    if (currentHookup) {
      currentHookup.hookup = this.hookupItem;
      currentHookup.name = this.name;
      currentHookup.note = this.note;
      this.hookups = this.hookups.filter((e) => e.hookup.length > 0);
    } else {
      this.hookups.push({
        date: this.date,
        hookup: this.hookupItem,
        note: this.note,
        name: this.name,
        id,
      });
    }
    console.log('Hookup result', toJS(this.hookups));
  };

  @action deleteHookup = (id) => {
    this.hookups = this.hookups.filter((e) => e.id !== id);
    this.setHookupSuccess(true);
    console.log(toJS(this.hookups));
  };

  @action setName = (name) => {
    this.name = name;
  };

  @action setHookupDate = (date) => {
    this.date = date;
  };

  @action setHookupNote = (note) => {
    this.note = note;
  };

  constructor() {
    makeObservable(this);
  }
}

export default new HookupStore();
