import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import FiendEntryStore from '../stores/FiendEntryStore';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import CompleteEntry from './CompleteEntry';

export default ({single = false, date, hook}) => {
  const {hookupItem, changeFlag, hookupSuccess, hookups, initial} = HookupStore;
  const {contactID, select, contactHookup} = FiendEntryStore;
  const [current, setCurrent] = useState(hookupItem);
  const {globalState} = globalStore;
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
  }, [hookupSuccess, hookups]);
  useEffect(() => {
    let temp;

    if (contactID) {
      temp = hookups?.find((e) => e.contactID === contactID && e.date === date);
    }
    if (initial) {
      temp = hookups?.find((e) => e.id === hookups[hookups.length - 1].id);
    }
    if (select && contactHookup.length > 0) {
      temp = hookups?.find((e) => e.id === hookups[hookups.length - 1].id);
    }
    if (changeFlag) {
      setCurrent(temp);
    }
    pars();
  }, [hookups, changeFlag, contactID, hookupSuccess, globalState.selectedTab]);

  const pars = () => {
    const arr = current?.hookup ? current.hookup : hookupItem;
    arr.forEach((e) => {
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
        <CompleteEntry arr={hookup.activities} single={single} hookup={hook} />
        {!!hookup.protection.length > 0 && (
          <CompleteEntry
            arr={hookup.protection}
            withText={true}
            text="Protection"
            single={single}
            hookup={hook}
          />
        )}
        {!!hookup.substance.length > 0 && (
          <CompleteEntry
            arr={hookup.substance}
            withText={true}
            text="Substance"
            hookup={hook}
            single={single}
          />
        )}
      </View>
    </>
  );
};
