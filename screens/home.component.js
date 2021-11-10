import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Divider, Layout, TabBar, Tab, Text } from "@ui-kitten/components";
import Swiper from "react-native-web-swiper";
import { styles } from "./home_component/style";
import { MenuBlog } from './menu.blog'

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Divider />
        <Layout
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Layout style={styles.container}>
            <Layout style={styles.slideBanner}>
              <Layout style={styles.slideContainer1}>
                <Swiper>
                  <Layout style={[styles.slideContainer]} level="4">
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWhJ1KNxdMmqu6Z5OlTkmzmvc10SpayTPahRTt9xsCu7hl1BdAMHlxiJ24I9ZRme1swQ&usqp=CAU",
                      }}
                    />
                    <Text>Slide 1</Text>
                  </Layout>
                  <Layout style={[styles.slideContainer]} level="4">
                    <Text>Slide 2</Text>
                  </Layout>
                  <Layout style={[styles.slideContainer]} level="4">
                    <Text>Slide 3</Text>
                  </Layout>
                  <Layout style={[styles.slideContainer]} level="4">
                    <Text>Slide 4</Text>
                  </Layout>
                </Swiper>
              </Layout>
            </Layout>

            <MenuBlog navigation={navigation}/>

            <Layout style={styles.info}>
              <Layout style={styles.infoItem} level="4">
                <Text>Info magang 1</Text>
              </Layout>
              <Layout style={styles.infoItem} level="4">
                <Text>Info magang 2</Text>
              </Layout>
            </Layout>

            <Layout style={styles.iklan}>
              <Layout style={styles.iklanContent} level="4">
                <Text>Iklan</Text>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
