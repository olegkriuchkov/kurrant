import {action, makeObservable, observable} from 'mobx';

class GlobalStore {
  @observable globalState = {selectedTab: 'home'};

  @action setSelectedTab = (tabName) => {
    this.globalState.selectedTab = tabName;
  };

  constructor() {
    makeObservable(this);
  }
}

const globalStore = new GlobalStore();
export default globalStore;
