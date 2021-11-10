// Menggunakan class component
import React from 'react';
import { Layout, Button, Text, ModalService } from '@ui-kitten/components';
import { View } from 'react-native';

export const Blog = ({navigation}) => {
    const modalID = '';
    
    const renderModalContentElement = () => {
      return (
        <Layout>
          <Text>Hi, I'm modal!</Text>
        </Layout>
      );
    };
    
  const showModal = () => {
    const contentElement = this.renderModalContentElement();
    this.modalID = ModalService.show(contentElement, { onBackdropPress: this.hideModal });
  };

  const hideModal = () => {
    ModalService.hide(this.modalID);
  };


  return (
    <Layout>
      <Button onPress={showModal}>SHOW MODAL</Button>
      <Button onPress={hideModal}>HIDE MODAL</Button>
    </Layout>
  );
}