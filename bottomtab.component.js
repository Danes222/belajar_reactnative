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
    <Icon {...props} name='home'/>
  );

const FeedIcon = (props) => (
    <Icon {...props} name='bell'/>
  );

const ProfileIcon = (props) => (
    <Icon {...props} name='person'/>
  );
// End Icons

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      style={{height:"10%"}}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon} title='Home' style={{}}/>
      <BottomNavigationTab icon={FeedIcon} title='Feed'/>
      <BottomNavigationTab icon={ProfileIcon} title='Profile'/>
    </BottomNavigation>
  );
  
  const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='Home' options={{headerShown: false, title: 'Awesome app'}} component={HomeScreen}/>
      <Screen name='Feed' options={{headerShown: false}} component={FeedScreen}/>
      <Screen name='Details' options={{headerShown: false}} component={ProfileScreen}/>
    </Navigator>
  );
  
  export const AppNavigator = () => (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );