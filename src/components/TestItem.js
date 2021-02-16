import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import TestsStore from '../stores/TestsStore';

import Item from './Item';

export default observer(
  ({title, types, sucess = false, whatIsTest, result, current, testing}) => {
    const {setTestsItem, testSuccess, testItems, tests} = TestsStore;
    const [flag, setFlag] = useState(false);
    const [selected, setSelected] = useState(result || []);
    const [confirm, setConfirm] = useState(sucess);
    const [temp, setTemp] = useState(whatIsTest || []);

    const currentItem = testItems.find((e) => e.title === title);
    const select = (title) => {
      if (!testing) {
        temp.includes(title)
          ? setTemp((prev) => prev.filter((e) => e !== title))
          : setTemp((prev) => [...prev, title]);
      } else {
        selected.includes(title)
          ? setSelected((prev) => prev.filter((e) => e !== title))
          : setSelected((prev) => [...prev, title]);
      }
    };
    useEffect(() => {
      if (current?.title === title) {
        console.log('CURRENT', toJS(current));
        setFlag(false);
        setConfirm(true);
        setSelected(current.result);
        setTemp(current.unresult);
      } else {
        setFlag(false);
      }
      if (!confirm) {
        setSelected([]);
      }
    }, [current, tests]);

    const setTest = (result) => {
      setTestsItem({
        title,
        unresult: temp,
        result,
        id: currentItem ? currentItem.id : uuidv4(),
      });
    };
    const toggleSingleSelect = () => {
      if (testSuccess) {
        setFlag(true);
      }
    };
    const testsSuccess = () => {
      if (testSuccess) {
        if (temp.length > 0) {
          setFlag(false);
          setConfirm(true);
          setTest(selected);
        } else {
          setFlag(false);
          setTest(selected);
        }
        if (temp.length === 0) {
          setConfirm(false);
        }
      }
    };
    return (
      <>
        {testing && !!temp.length > 0 && (
          <Item
            testing={testing}
            toggleSingleSelect={toggleSingleSelect}
            temp={temp}
            title={title}
            setFlag={setFlag}
            setConfirm={setConfirm}
            confirm={confirm}
            flag={flag}
            types={types}
            select={select}
            selected={selected}
            testsSuccess={testsSuccess}
            whatIsTest={whatIsTest}
          />
        )}
        {!testing && (
          <Item
            testing={testing}
            toggleSingleSelect={toggleSingleSelect}
            temp={temp}
            title={title}
            setFlag={setFlag}
            setConfirm={setConfirm}
            confirm={confirm}
            flag={flag}
            types={types}
            select={select}
            selected={selected}
            testsSuccess={testsSuccess}
            whatIsTest={whatIsTest}
          />
        )}
      </>
    );
  },
);
