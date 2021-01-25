import React from 'react';
import TabsRoute from './src/Route/TabsRoute';
import HookupStore from './src/stores/HookupStore';

function App() {
  const {getHookups} = HookupStore;
  getHookups();
  return <TabsRoute />;
}

export default App;
