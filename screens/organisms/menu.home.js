import React from "react";
import { TouchableOpacity } from "react-native";
import { Layout, Text, Icon } from "@ui-kitten/components";
import { styles } from "../assets/style";

// Icons
const HomeIcon = (props) => <Icon {...props} name="home" fill="#8F9BB3" />;
const MapIcon = (props) => <Icon {...props} name="map" fill="#8F9BB3" />;

const BidangIcon = (props) => <Icon {...props} name="bulb" fill="#8F9BB3" />;

const BlogIcon = (props) => <Icon {...props} name="browser" fill="#8F9BB3" />;

const FAQIcon = (props) => <Icon {...props} name="message-square" fill="#8F9BB3" />;

// End Icons

export const MenuBlog = (props) => {
  const navigation = props.navigation;
  return (
    <Layout style={styles.menu}>
      <Layout style={styles.menuItem}>
        <Layout style={styles.menuItemImage} level="1">
          <MapIcon style={{ width: "90%", height: "90%", alignSelf: 'center' }} />
        </Layout>
        <Text style={styles.menuItemText}>Lokasi</Text>
      </Layout>
      <Layout style={styles.menuItem}>
        <Layout style={styles.menuItemImage} level="1">
          <BidangIcon style={{ width: "90%", height: "90%", alignSelf: 'center' }} />
        </Layout>
        <Text style={styles.menuItemText}>Bidang</Text>
      </Layout>
      <Layout style={styles.menuItem}>
        <Layout style={styles.menuItemImage} level="1">
          <TouchableOpacity
            onPress={() => navigation.navigate("Blog")}
            style={{
              borderRadius: 10,
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <BlogIcon style={{ width: "90%", height: "90%", alignSelf: 'center' }} />
          </TouchableOpacity>
        </Layout>
        <Text style={styles.menuItemText}>Blog</Text>
      </Layout>
      <Layout style={styles.menuItem}>
        <Layout style={styles.menuItemImage} level="1">
          <FAQIcon style={{ width: "90%", height: "90%", alignSelf: 'center' }} />
        </Layout>
        <Text style={styles.menuItemText}>FAQ</Text>
      </Layout>
    </Layout>
  );
};
