import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {View} from 'react-native';
import ButtonWithArrow from '../../components/ButtonWithArrow';
import ColapseButton from '../../components/ColapseButton';
import HookupStore from '../../stores/HookupStore';
import DataStyle from '../../style/page/Settings/DataStyle';

export default observer(() => {
  const [activitiesFlag, setActivities] = useState(false);
  const [protection, setProtection] = useState(false);
  const [substance, seSubstance] = useState(false);
  const activities = [
    'Makeout',
    'Handjob',
    'Blowjob',
    'Rimjob',
    'Anal',
    'Other',
  ];
  const substanceTabs = ['Alcohol', 'Marijuana', 'Poppers', 'Other '];
  const protectionTabs = ['Condom', 'No Condom'];
  const {clearLogFilters} = HookupStore;
  return (
    <View style={DataStyle.main}>
      <ButtonWithArrow
        hideArrow
        style={DataStyle.button}
        textStyle={DataStyle.buttonText}
        title="Filters"
        filters
        onPress={() => clearLogFilters()}
        text="Deselect all"
      />
      <ColapseButton
        falg={activitiesFlag}
        setflag={setActivities}
        title="Activities"
        array={activities}
      />
      <ColapseButton
        falg={protection}
        setflag={setProtection}
        title="Protection"
        array={protectionTabs}
      />
      <ColapseButton
        falg={substance}
        setflag={seSubstance}
        title="Substance"
        array={substanceTabs}
        last
      />
    </View>
  );
});
