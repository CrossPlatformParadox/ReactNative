import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  IconDiscover,
  IconDiscoverOutline,
  IconProfile,
  IconProfileOutline,
  IconSocial,
  IconSocialOutline,
} from './Icons/AppIcons';
import {DiscoverView} from './Views/DiscoverView';
import {ProfileView} from './Views/ProfileView';
import {SocialView} from './Views/SocialView';

function SocialScreen({navigation}) {
  return <SocialView props={navigation} />;
}

function DiscoverScreen({navigation}) {
  return <DiscoverView props={navigation} />;
}

function ProfileScreen({navigation}) {
  return <ProfileView props={navigation} />;
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Discover"
        tabBarOptions={{
          activeTintColor: '#000000',
          inactiveTintColor: '#969696',
          labelStyle: {
            marginTop: -4,
          },
        }}>
        <Tab.Screen
          name="Social"
          component={SocialScreen}
          options={{
            tabBarLabel: 'Social',
            tabBarIcon: ({focused, color, size}) => {
              if (focused) {
                return <IconSocial color={color} size={size} />;
              }
              return <IconSocialOutline color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: ({focused, color, size}) => {
              if (focused) {
                return <IconDiscover color={color} size={size} />;
              }
              return <IconDiscoverOutline color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused, color, size}) => {
              if (focused) {
                return <IconProfile color={color} size={size} />;
              }
              return <IconProfileOutline color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
