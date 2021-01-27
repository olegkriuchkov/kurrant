import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import HookupStore from '../stores/HookupStore';
import CompleteEntry from './CompleteEntry';

export default ({single = false}) => {
  const {hookupItem, hookupSuccess} = HookupStore;

  const [hookup, setHookup] = useState({
    protection: [],
    activities: [],
    substance: [],
  });
  useEffect(() => {
    setHookup({
      protection: [],
      activities: [],
      substance: [],
    });
    pars();
  }, [hookupSuccess]);
  const pars = () => {
    hookupItem.forEach((e) => {
      switch (e.colection) {
        case 'Substance':
          setHookup((prev) => {
            return {
              protection: [...prev.protection],
              activities: [...prev.activities],
              substance: [...prev.substance, e],
            };
          });
          break;
        case 'Protection':
          setHookup((prev) => {
            return {
              protection: [...prev.protection, e],
              activities: [...prev.activities],
              substance: [...prev.substance],
            };
          });
          break;

        case undefined:
          setHookup((prev) => {
            return {
              protection: [...prev.protection],
              activities: [...prev.activities, e],
              substance: [...prev.substance],
            };
          });
          break;
      }
    });
  };

  return (
    <>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10}}>
        <CompleteEntry arr={hookup.activities} single={single} />
        {!!hookup.protection.length > 0 && (
          <CompleteEntry
            arr={hookup.protection}
            withText={true}
            text="Protection"
            single={single}
          />
        )}
        {!!hookup.substance.length > 0 && (
          <CompleteEntry
            arr={hookup.substance}
            withText={true}
            text="Substance"
            single={single}
          />
        )}
      </View>
    </>
  );
};
