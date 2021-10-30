import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Button, Layout, Text } from '@ui-kitten/components';



export const FeedScreen = ({ navigation }) => {
      const [data, setData] = useState(false);
      
      
      const search = (sq='velocipastor') => {
            fetch('http://www.omdbapi.com/?apikey=f4674f5&s='+sq)
            .then(response => response.json())
            .then(json => {
                  setData(json.Search)
            })
      }
      
  //var text = [];
  //for (let i = 0; i < 10; i++) {
  //  text.push(
  //    <Text key={i} category='h6'>This Is Feed.</Text>
  // )
  //}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/> */}
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
                  data.map((item, index) => {
                        return(
                              <View>
                                    <Text>{item.Title}</Text>
                                    <Text>{item.Year}</Text>
                              </View>
                        )
                  })
            }
        <Button style={{ marginVertical: 10 }} onPress={ search() } title='CARI FILM'>CARI FILM</Button>
      </Layout>
    </SafeAreaView>
  );
};
