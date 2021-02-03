import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, makeObservable, observable, toJS} from 'mobx';
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
    this.contactID = '';
  };

  @action setFiendSucess = (bool) => {
    this.friendEntrySuccess = bool;
  };

  @action setContacID = (id) => {
    this.contactID = id;
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
    await this.getContacts();
    const currentContact =
      this.contact !== null
        ? this.contact.find((e) => e.friendId === friendId)
        : false;
    if (currentContact) {
      await this.removeContact();
      currentContact.contact = this.contactItem;
      currentContact.name = this.name;
      currentContact.friendEntryNote = this.friendEntryNote;
      currentContact.location = this.location;
      this.contact = this.contactItem.filter((e) => e.status.length > 0);
      await this.setAsyncContact();
    } else {
      await this.removeContact();
      this.contact.push({
        contact: this.contactItem,
        friendEntryNote: this.friendEntryNote,
        name: this.name,
        location: this.location,
        friendId,
        type: 'contact',
      });
      await this.setAsyncContact();
    }
  };

  @action deleteContact = async (friendId) => {
    this.getContacts();
    this.contact = this.contact.filter((e) => e.friendId !== friendId);
    this.removeContact();
    this.setAsyncContact();
    Actions.replace('Home');
    this.setFiendSucess(true);
    console.log('delete', toJS(this.contact), 'id', friendId);
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

  constructor() {
    makeObservable(this);
  }
}

export default new FiendEntryStore();
