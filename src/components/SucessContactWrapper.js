import {toJS} from 'mobx';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import FiendEntryStore from '../stores/FiendEntryStore';
import ContactStatus from './ContactStatus';

export default ({id}) => {
  const {friendEntrySuccess, contact} = FiendEntryStore;

  const [status, setStatus] = useState({
    position: [],
    status: [],
  });
  const currentContact = contact?.find((e) => e.friendId === id);
  useEffect(() => {
    console.log(toJS(currentContact));
    if (!currentContact) return;
    setStatus({
      position: [],
      status: [],
    });
    pars();
  }, [friendEntrySuccess]);
  const pars = () => {
    if (!currentContact.contact) {
      return;
    }
    currentContact.contact?.forEach((e) => {
      switch (e.collections) {
        case 'Status':
          setStatus((prev) => {
            return {
              position: [...prev.position],
              status: [...prev.status, e],
            };
          });
          break;
        case 'Position':
          setStatus((prev) => {
            return {
              position: [...prev.position, e],
              status: [...prev.status],
            };
          });
          break;
      }
    });
  };

  return (
    <>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10}}>
        <ContactStatus arr={status.status} single={true} />
        {!!status.position.length > 0 && (
          <ContactStatus
            arr={status.position}
            withText={true}
            text="Protection"
            single={true}
          />
        )}
      </View>
    </>
  );
};
