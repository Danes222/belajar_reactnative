// Menggunakan class component
import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {
  Layout,
  Button,
  Text,
  ModalService,
  Divider,
} from "@ui-kitten/components";
import { View } from "react-native";
import { styles } from "./assets/style";

export const Blog = ({ navigation }) => {
  const [data, setData] = useState([]);

  const search = () => {
    fetch("https://blog-danes.herokuapp.com/api/latest-blogs")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // console.log(json)
      });
  };

  return (
    <Layout style={{ flex: 1 }} >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Divider />
          <Layout
            style={{
              flex: 1,
              paddingHorizontal: 15,
              paddingTop: 40,
              paddingBottom: 40,
            }}
          >
            <Layout>
              <Button onPress={search()}>Show Blogs</Button>
            </Layout>
            <Layout style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
              {data.map((item, index) => {
                return (
                  <Layout level='4'  key={index} style={{ padding: 10, width: '100%', height: 200, marginHorizontal: 5, marginVertical: 5 }} >
                    <Text>{item.title}</Text>
                    <Text>{item.date_created.slice(0, 10)}</Text>
                    <Button onPress={() => navigation.navigate('Show Blog', {slug:item.slug})}>Go..</Button>
                  </Layout>
                )
              })}
            </Layout>
          </Layout>
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};
