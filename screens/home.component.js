import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { CardHome } from './home_component/card.home.component';

export const HomeScreen = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title='MyApp' alignment='center'/> */}
      <Divider/>
      <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <CardHome />
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};