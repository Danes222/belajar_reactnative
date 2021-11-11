import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { styles } from "../assets/style";
import { InfoImage } from "../molecules/image.info.home";

export const Info = () => {
  return (
    <Layout style={styles.info}>
      <Layout style={styles.infoItem} level="4">
        <InfoImage url="https://picsum.photos/324/200?food" />
      </Layout>
      <Layout style={styles.infoItem} level="4">
        <InfoImage url="https://picsum.photos/324/200?food" />
      </Layout>
    </Layout>
  );
};
