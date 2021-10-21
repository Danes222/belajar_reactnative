import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/home.component';
import { ProfileScreen } from './screens/profile.component';
import { FeedScreen } from './screens/feed.component';
import { BottomNavigation, BottomNavigationTab, Icon, Layout, Text } from '@ui-kitten/components';

const { Navigator, Screen } = createBottomTabNavigator();

// Icons
const HomeIcon = (props) => (
    <Icon {...props} name='home-outline'/>
  );

const FeedIcon = (props) => (
    <Icon {...props} name='bell-outline'/>
  );

const ProfileIcon = (props) => (
    <Icon {...props} name='person-outline'/>
  );
// End Icons

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon} title='Home'/>
      <BottomNavigationTab icon={FeedIcon} title='Feed'/>
      <BottomNavigationTab icon={ProfileIcon} title='Profile'/>
    </BottomNavigation>
  );
  
  const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='Home' component={HomeScreen}/>
      <Screen name='Feed' component={FeedScreen}/>
      <Screen name='Details' component={ProfileScreen}/>
    </Navigator>
  );
  
  export const AppNavigator = () => (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );