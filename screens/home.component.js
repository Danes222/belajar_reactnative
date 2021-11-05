import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { LayoutLevelShowcase } from './home_component/card.home.component';

export const HomeScreen = ({ navigation }) => {

  // const navigateDetails = () => {
  //   navigation.navigate('Details');
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* <TopNavigation title='MyApp' alignment='center'/> */}
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LayoutLevelShowcase />
          {/* <Button onPress={navigateDetails}>OPEN PROFILE</Button> */}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};