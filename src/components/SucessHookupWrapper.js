import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import HookupStore from '../stores/HookupStore';
import TestsStyle from '../style/page/Tests/TestsStyle';
import EntryItem from './EntryItem';

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
      if (e.colection === 'Substance') {
        setHookup((prev) => {
          return {
            protection: [...prev.protection],
            activities: [...prev.activities],
            substance: [...prev.substance, e],
          };
        });
      }
      if (e.colection === 'Protection') {
        setHookup((prev) => {
          return {
            protection: [...prev.protection, e],
            activities: [...prev.activities],
            substance: [...prev.substance],
          };
        });
      }
      if (e.colection === undefined) {
        setHookup((prev) => {
          return {
            protection: [...prev.protection],
            activities: [...prev.activities, e],
            substance: [...prev.substance],
          };
        });
      }
    });
  };
  return (
    <>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10}}>
        {hookup.activities.map((e) => (
          <>
            <EntryItem
              title={e.title}
              key={e.title}
              result={e.result}
              single={single}
              sucess={true}
            />
          </>
        ))}
      </View>
      {!!hookup.protection.length > 0 && (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10}}>
          <Text style={[TestsStyle.textNote, {right: 10}]}>Protection</Text>
          {hookup.protection.map((e) => (
            <>
              <EntryItem
                title={e.title}
                key={e.title}
                result={e.result}
                single={single}
                sucess={true}
              />
            </>
          ))}
        </View>
      )}
      {!!hookup.substance.length > 0 && (
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10}}>
          <Text style={TestsStyle.textNote}>Substance</Text>
          {hookup.protection.map((e) => (
            <>
              <EntryItem
                title={e.title}
                key={e.title}
                result={e.result}
                single={single}
                sucess={true}
              />
            </>
          ))}
        </View>
      )}
    </>
  );
};
