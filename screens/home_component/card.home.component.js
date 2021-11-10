import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Layout, ViewPager, Text } from "@ui-kitten/components";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Swiper from "react-native-web-swiper";
import { styles } from "./style";
import { Blog } from './../blog.component';

const { Navigator, Screen } = createBottomTabNavigator();

export const LayoutLevelShowcase = ({ navigation }) => {

  const navigateBlog = () => {
    navigation.navigate('Blog');
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  return (
    <Layout style={styles.container}>
      <Layout style={styles.slideBanner}>
        <Layout style={styles.slideContainer1}>
          <Swiper>
            <Layout style={[styles.slideContainer]} level="4">
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWhJ1KNxdMmqu6Z5OlTkmzmvc10SpayTPahRTt9xsCu7hl1BdAMHlxiJ24I9ZRme1swQ&usqp=CAU',
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
  );
};
