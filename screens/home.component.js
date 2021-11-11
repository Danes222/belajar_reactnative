import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Divider, Layout, TabBar, Tab, Text } from "@ui-kitten/components";
import { styles } from "./assets/style";
import { MenuBlog } from './organisms/menu.home'
import { Slide } from './organisms/slide.home'
import { Info } from './organisms/info.home'
import { Iklan } from './organisms/iklan.home'

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Divider />
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Layout style={styles.container}>

            <Slide/>
            <MenuBlog navigation={navigation}/>
            <Info/>
            <Iklan/>

          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
