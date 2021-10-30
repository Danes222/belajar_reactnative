import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';

const search = (sq='velocipastor') => {
      fetch('http://www.omdbapi.com/?apikey=f4674f5&s='+sq)
      .then(response => response.json())
      .then(json => console.log(json))
  }

export const FeedScreen = ({ navigation }) => {
  
  var text = [];
  for (let i = 0; i < 10; i++) {
    text.push(
      <Text key={i} category='h6'>This Is Feed.</Text>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/> */}
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { text }
        <Button style={{ marginVertical: 10 }} onPress={ search() } title='CARI FILM'>CARI FILM</Button>
      </Layout>
    </SafeAreaView>
  );
};