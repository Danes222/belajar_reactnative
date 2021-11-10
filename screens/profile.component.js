import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, Button, TopNavigationAction } from '@ui-kitten/components';
import { ThemeContext } from '../theme-context';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const ProfileScreen = ({ navigation }) => {

  const themeContext = React.useContext(ThemeContext);
  console.log(themeContext.theme);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/> */}
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h6'>This Is Profile.</Text>
        <Button style={{ marginVertical: 10 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
        <Button style={{ marginVertical: 10 }} onPress={navigateHome}>Home</Button>
      </Layout>
    </SafeAreaView>
  );
};