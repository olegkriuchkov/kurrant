import moment from 'moment';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Image from './Image';
import NavbarStyle from '../style/component/NavbarStyle';
import CustomCalendar from './Calendar';
import CalendarButton from './CalendarButton';

const NavBar = ({
  title,
  arrowBack,
  color,
  onPress,
  titleStyle,
  settings,
  noStyle,
  pop,
  calendar,
  cancel,
}) => {
  const [date, setDate] = useState(new Date());
  const [calendarFlag, setCalendarFlag] = useState(false);
  const press = (day) => {
    setDate(new Date(day.timestamp));
  };
  const wrapperStyle = noStyle
    ? [NavbarStyle.noStyle, {backgroundColor: color}]
    : NavbarStyle.mainStyle;
  return (
    <SafeAreaView style={wrapperStyle}>
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
            {settings && (
              <Image
                path={require('../assets/settings.png')}
                style={NavbarStyle.settings}
                containerStyle={NavbarStyle.settingsBtn}
                onPress={() => Actions.Settings()}
              />
            )}
          </View>
          {/* {calendarFlag && (
            <CustomCalendar
              onPress={press}
              date={date}
              onEndReserch={() => setDate((prev) => moment(prev).add('month'))}
            />
          )} */}
        </View>
      </View>
    </SafeAreaView>
  );
};

NavBar.defaultProps = {};

export default NavBar;
