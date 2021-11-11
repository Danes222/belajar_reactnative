import React from 'react'
import { styles } from "../assets/style";
import { Image } from 'react-native';

export const InfoImage = (props) => {
  const url = props.url;

  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: url,
      }}
    />
  );
};
