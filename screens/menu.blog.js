import React from "react";
import {
  TouchableOpacity,
} from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { styles } from "./home_component/style";

export const MenuBlog = (props) => {
    const navigation = props.navigation
  return (
    <Layout style={styles.menu}>
      <Layout style={styles.menuItem}>
        <Layout style={styles.menuItemImage} level="4" />
        <Text style={styles.menuItemText}>Lokasi</Text>
      </Layout>
      <Layout style={styles.menuItem}>
        <Layout style={styles.menuItemImage} level="4" />
        <Text style={styles.menuItemText}>Bidang</Text>
      </Layout>
      <Layout style={styles.menuItem}>
        <Layout style={styles.menuItemImage} level="4">
          <TouchableOpacity
            onPress={() => navigation.navigate("Blog")}
            style={{
              backgroundColor: "dodgerblue",
              width: "100%",
              height: "100%",
            }}
          ></TouchableOpacity>
        </Layout>
        <Text style={styles.menuItemText}>Blog</Text>
      </Layout>
      <Layout style={styles.menuItem}>
        <Layout style={styles.menuItemImage} level="4" />
        <Text style={styles.menuItemText}>FAQ</Text>
      </Layout>
    </Layout>
  );
};
