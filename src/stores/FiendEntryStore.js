import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeObservable, observable, reaction, toJS} from 'mobx';
import {Actions} from 'react-native-router-flux';

class FiendEntryStore {
  @observable friendEntrySuccess = true;

  @observable friendEntryNote = '';

  @observable name = '';

  @observable contactItem = [];

  @observable location = '';

  @observable note = '';

  @observable contactID = '';

  @observable contact = [];

  @observable filters = [];

  @observable contactHookup = [];

  @observable searchValue = '';

  @observable searchFlag = false;

  @action setSearchValue = (value) => {
    this.searchValue = value;
  };

  @action setFriendNote = (text) => {
    this.friendEntryNote = text;
  };

  @action setLocation = (location) => {
    this.location = location;
  };

  @action setName = (name) => {
    this.name = name;
  };

  @action clearForm = () => {
    this.name = '';
    this.friendEntryNote = '';
    this.location = '';
  };

  @action setFiendSucess = (bool) => {
    this.friendEntrySuccess = bool;
  };

  @action setContacID = (id) => {
    this.contactID = id;
  };

  @action clearItem = () => {
    this.contactItem = [];
  };

  @action setContactItem = (item) => {
    const currentSingleItem = this.contactItem.find(
      (e) => e.title === item.title,
    );
    if (currentSingleItem) {
      this.contactItem = this.contactItem.filter(
        (e) => e !== currentSingleItem,
      );
    } else {
      this.contactItem.push(item);
    }
  };

  @action setContacts = async (friendId) => {
    this.getContacts();
    const currentContact =
      this.contact !== null
        ? this.contact.find((e) => e.friendId === friendId)
        : false;
    if (currentContact) {
      this.removeContact();
      currentContact.contact = this.contactItem;
      currentContact.name = this.name ? this.name : currentContact.name;
      currentContact.friendEntryNote = this.friendEntryNote;
      currentContact.location = this.location;

      this.contact = this.contact.map((e) => {
        if (e.friendId === friendId) {
          return {
            contact: currentContact.contact,
            friendEntryNote: currentContact.friendEntryNote,
            name: currentContact.name,
            location: currentContact.location,
            friendId: currentContact.friendId,
            type: 'contact',
          };
        }
        return e;
      });
      console.log('CONTACT', toJS(this.contact));
      this.setAsyncContact();
    } else {
      this.removeContact();
      this.contact.push({
        contact: this.contactItem,
        friendEntryNote: this.friendEntryNote,
        name: this.name,
        location: this.location,
        friendId,
        type: 'contact',
      });
      this.setAsyncContact();
    }
  };

  @action deleteContact = async (friendId) => {
    this.getContacts();
    this.contact = this.contact.filter((e) => e.friendId !== friendId);
    this.removeContact();
    this.setAsyncContact();
    Actions.replace('Home');
    this.setFiendSucess(true);
  };

  @action setAsyncContact = async () => {
    try {
      const contact = JSON.stringify(this.contact);
      await AsyncStorage.setItem(`@Contacts`, contact);
    } catch (e) {
      throw new Error('Something wrong', e);
    }
  };

  @action getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {}

    console.log(keys);
  };

  @action getContacts = async () => {
    const result = JSON.parse(await AsyncStorage.getItem('@Contacts'));
    try {
      this.contact = result !== null ? result : [];
    } catch (e) {
      throw new Error(e);
    }
  };

  @action removeContact = async () => {
    try {
      await AsyncStorage.removeItem(`@Contacts`);
    } catch (e) {
      throw new Error(e);
    }
  };

  @action setContactHookup = (array) => {
    this.contactHookup = array;
  };

  @action setFilters = (el) => {
    this.filters.push(el);
  };

  @action deleteFilter = (filter) => {
    this.filters = this.filters.filter((e) => e !== filter);
  };

  @action clearFilters = () => {
    this.filters = [];
  };

  constructor() {
    makeObservable(this);
  }
}

export default new FiendEntryStore();
