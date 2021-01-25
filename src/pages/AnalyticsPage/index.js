import {observer} from 'mobx-react';
import React from 'react';
import analyticsStore from '../../stores/analyticsStore';
import {TrackerTab} from './TrackerTab';

export const AnalyticsPage = observer(() => {
  const {analyticsState} = analyticsStore;

  const components = {
    tracker: <TrackerTab />,
    activity: <></>,
    protection: <></>,
    substances: <></>,
  };
  return <>{components[analyticsState.selectedTab]}</>;
});
