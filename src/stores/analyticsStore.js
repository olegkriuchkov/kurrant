import {action, makeObservable, observable} from 'mobx';

class AnalyticsStore {
  @observable analyticsState = {selectedTab: 'tracker'};

  @action setSelectedTab = (tabName) => {
    this.analyticsState.selectedTab = tabName;
  };

  constructor() {
    makeObservable(this);
  }
}

const analyticsStore = new AnalyticsStore();
export default analyticsStore;
