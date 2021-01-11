import {observer} from 'mobx-react';
import React from 'react';
import Icon from './Icon';

const activeIcons = {
  plus: 'plus',
  people: 'people',
  calendar: 'calender',
};

export default observer(({iconType, isActive}) => {
  return <Icon iconType={isActive ? activeIcons[iconType] : iconType} />;
});
