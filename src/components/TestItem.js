import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import TestsStore from '../stores/TestsStore';

import Item from './Item';

export default observer(
  ({
    title,
    types,
    sucess = false,
    whatIsTest,
    result,
    current,
    testing,
    changeLog,
  }) => {
    const {
      setTestsItem,
      testSuccess,
      testItems,
      tests,
      deleteTestItem,
      fullscreening,
      unFulScreening,
      tempStore,
      setTempStore,
    } = TestsStore;

    const [flag, setFlag] = useState(false);
    const [selected, setSelected] = useState(result || []);
    const [confirm, setConfirm] = useState(sucess);
    const [id, setID] = useState(uuidv4());
    const [temp, setTemp] = useState(whatIsTest || []);
    const currentItem = testItems.find((e) => e.title === title);
    useEffect(() => {
      if (whatIsTest !== undefined) {
        setTemp(whatIsTest);
      }
    }, [whatIsTest]);
    const select = (title) => {
      if (!testing) {
        temp?.includes(title)
          ? setTemp((prev) => prev.filter((e) => e !== title))
          : setTemp((prev) => [...prev, title]);
        setTempStore(title);
      } else {
        selected.includes(title)
          ? setSelected((prev) => prev.filter((e) => e !== title))
          : setSelected((prev) => [...prev, title]);
      }
    };

    useEffect(() => {
      if (current?.title === title && current !== undefined) {
        setFlag(false);
        setConfirm(true);
        setSelected(current.result);
        setTemp(current.unresult);
        setTest(selected);
      } else {
        setFlag(false);
      }
      if (!confirm) {
        setSelected([]);
      }
    }, [current, tests]);

    useEffect(() => {
      if (unFulScreening) {
        if (fullscreening && !testing) {
          setTemp(['Rectal', 'Urine', 'Throad']);
          setFlag(false);
          setConfirm(true);
          title !== 'Full screening (All)' &&
            setTestsItem({
              title,
              unresult: ['Rectal', 'Urine', 'Throad'],
              result: ['Rectal', 'Urine', 'Throad'],
              id: currentItem ? currentItem.id : id,
            });
        }
        if (fullscreening && testing) {
          setFlag(false);
          setSelected(['Rectal', 'Urine', 'Throad']);
          setConfirm(true);
          title !== 'Full screening (All)' &&
            setTestsItem({
              title,
              unresult: ['Rectal', 'Urine', 'Throad'],
              result: ['Rectal', 'Urine', 'Throad'],
              id: currentItem ? currentItem.id : id,
            });
        }

        if (!fullscreening && !testing) {
          setFlag(false);
          setConfirm(false);
          setTemp([]);
          deleteTestItem(id);
        }
        if (!fullscreening && testing && !sucess) {
          setFlag(false);
          setConfirm(true);
          setSelected([]);
          title !== 'Full screening (All)' &&
            setTestsItem({
              title,
              unresult: temp,
              result: [],
              id: currentItem ? currentItem.id : id,
            });
        }
        if (!fullscreening && testing && title === 'Full screening (All)') {
          setFlag(false);
          setConfirm(false);
        }
      }
    }, [fullscreening, testing]);

    const setTest = (result) => {
      if (temp.length === 0) {
        setTestsItem({
          id: currentItem ? currentItem.id : id,
        });
      } else {
        setTestsItem({
          title,
          unresult: temp,
          result,
          id: currentItem ? currentItem.id : id,
        });
      }
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
        {testing && !!temp?.length > 0 && (
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
