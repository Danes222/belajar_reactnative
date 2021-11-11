import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { styles } from "../assets/style";

export const Iklan = () => {
  return (
    <Layout style={styles.iklan}>
      <Layout style={styles.iklanContent} level="4">
        <Text>Iklan</Text>
      </Layout>
    </Layout>
  );
};
