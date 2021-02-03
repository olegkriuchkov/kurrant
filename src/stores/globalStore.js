import {action, makeObservable, observable} from 'mobx';
import moment from 'moment';
import HookupStore from './HookupStore';
import TestsStore from './TestsStore';

class GlobalStore {
  @observable globalState = {selectedTab: 'home'};

  /*  @observable date = [...HookupStore.hookups, ...TestsStore.tests];

  @observable log = []; */

  @action setSelectedTab = (tabName) => {
    this.globalState.selectedTab = tabName;
  };

  /* @action parseLog = () => {
    let dates = [];
    this.date.forEach((e) => {
      dates = [
        ...dates,
        {
          title: moment(e.date).format('YY-MMM'),
          date: [
            {
              data: e.date,
              name: e.name,
              type: e.type,
              length: e.test?.length || e.hookup?.length || 0,
            },
          ],
        },
      ];
    });
    const uniqueMonths = [...new Set(dates.map((e) => e.title))];
    const mergedDataByMonths = uniqueMonths.map((month) => {
      const temp = dates.filter((e) => e.title === month).map((e) => e.date);
      return {title: month, date: temp};
    });

    this.log = mergedDataByMonths.sort((a, b) =>
      moment(a.title).diff(moment(b.title)),
    );
  }; */

  constructor() {
    makeObservable(this);
  }
}

const globalStore = new GlobalStore();
export default globalStore;
