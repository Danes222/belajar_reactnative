// Menggunakan class component
import React from "react";
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
  const modalID = "";

  const renderModalContentElement = () => {
    return (
      <Layout>
        <Text>Hi, I'm modal!</Text>
      </Layout>
    );
  };

  const showModal = () => {
    const contentElement = this.renderModalContentElement();
    this.modalID = ModalService.show(contentElement, {
      onBackdropPress: this.hideModal,
    });
  };

  const hideModal = () => {
    ModalService.hide(this.modalID);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Divider />
        <Layout
          style={{ height: 700, justifyContent: "center", alignItems: "center" }}
        >
          <Layout style={styles.container, {justifyContent: 'center', alignItems: 'center'}}>
            <Layout style={{}}>
              <Button onPress={showModal}>SHOW MODAL</Button>
              <Button onPress={hideModal}>HIDE MODAL</Button>
            </Layout>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};
