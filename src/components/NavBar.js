import {observer} from 'mobx-react';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import COLOR from '../constants/COLOR';
import globalStore from '../stores/globalStore';
import HookupStore from '../stores/HookupStore';
import NavbarStyle from '../style/component/NavbarStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';
import Image from './Image';
import SelectedCalendar from './SelectedCalendar';

const NavBar = observer(
  ({
    title,
    arrowBack,
    color,
    onPress,
    titleStyle,
    settings,
    noStyle,
    pop,
    safePass,
    calendar,
    cancel,
    logCalendar,
  }) => {
    const [date, setDate] = useState(new Date());
    const [calendarFlag, setCalendarFlag] = useState(false);
    const press = (day) => {
      setDate(new Date(day.timestamp));
    };
    const {logFilters} = HookupStore;
    const {globalState, setAsyncPass, confirmPassword} = globalStore;
    useEffect(() => setCalendarFlag(false), [globalState.selectedTab]);
    const wrapperStyle = noStyle
      ? [NavbarStyle.noStyle, {backgroundColor: color}]
      : NavbarStyle.mainStyle;
    return (
      <View style={wrapperStyle}>
        <View style={{flexDirection: 'row'}}>
          {arrowBack && (
            <Image
              path={require('../assets/arrowBack.png')}
              style={NavbarStyle.arrowBack}
              containerStyle={{bottom: 30}}
              onPress={() => Actions.pop()}
            />
          )}
          {cancel && (
            <TouchableOpacity
              style={NavbarStyle.canelWrapper}
              onPress={() => Actions.pop()}>
              <Text style={NavbarStyle.cancel}>Cancel</Text>
            </TouchableOpacity>
          )}
          {safePass && (
            <TouchableOpacity
              style={NavbarStyle.saveWrapper}
              onPress={() => setAsyncPass()}>
              <Text style={NavbarStyle.cancel}>Save password</Text>
            </TouchableOpacity>
          )}
          {pop && (
            <Image
              path={require('../assets/pop.png')}
              style={NavbarStyle.pop}
              containerStyle={{bottom: 20}}
              onPress={() => Actions.pop()}
            />
          )}
          <View style={NavbarStyle.container}>
            <View style={NavbarStyle.dateContaier}>
              <View style={NavbarStyle.dateText}>
                {!noStyle && (
                  <Text style={[titleStyle, {fontSize: 20}]}>
                    {moment(date).format('MMMM DD') || title}
                  </Text>
                )}
                {calendar && (
                  <CalendarButton
                    onPress={() => setCalendarFlag(!calendarFlag)}
                    calendarFlag={calendarFlag}
                  />
                )}
              </View>
              {settings && !logCalendar && (
                <Image
                  path={require('../assets/settings.png')}
                  style={NavbarStyle.settings}
                  containerStyle={NavbarStyle.settingsBtn}
                  onPress={() => Actions.Settings()}
                />
              )}
              {settings && logCalendar && (
                <View>
                  {logFilters.length > 0 && (
                    <View
                      style={{
                        position: 'absolute',
                        borderRadius: 50,
                        backgroundColor: COLOR.PINK,
                        width: 16,
                        height: 16,
                        alignItems: 'center',
                        bottom: 35,
                        left: 10,
                      }}>
                      <Text style={{fontSize: 12, color: COLOR.WHITE}}>
                        {logFilters.length}
                      </Text>
                    </View>
                  )}
                  <Image
                    path={require('../assets/settings.png')}
                    style={NavbarStyle.settings}
                    containerStyle={NavbarStyle.settingsBtn}
                    onPress={() => Actions.LogFilters()}
                  />
                </View>
              )}
            </View>
            {calendarFlag && !logCalendar && (
              <CustomCalendar
                onPress={press}
                date={date}
                onEndReserch={() =>
                  setDate((prev) => moment(prev).add('month'))
                }
              />
            )}
            {logCalendar && calendarFlag && (
              <SelectedCalendar
                onPress={press}
                date={date}
                onEndReserch={() =>
                  setDate((prev) => moment(prev).add('month'))
                }
              />
            )}
          </View>
        </View>
      </View>
    );
  },
);

NavBar.defaultProps = {};

export default NavBar;
