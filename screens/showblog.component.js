// Menggunakan class component
import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {
    Layout,
    Button,
    Icon,
    Text,
    Divider,
    TopNavigation,
    TopNavigationAction
} from "@ui-kitten/components";

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const ShowBlog = ({ navigation, route }) => {
    const [data, setData] = useState([]);
    const { slug } = route.params

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    const search = () => {
        fetch("https://blog-danes.herokuapp.com/api/latest-blogs")
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                // console.log(json)
            });
    };

    return (
        <Layout style={{ flex: 1 }} >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} style={{ marginTop: 20 }} />
                    <Divider />
                    <Layout
                        style={{
                            flex: 1,
                            paddingHorizontal: 15,
                            paddingTop: 40,
                            paddingBottom: 40,
                        }}
                    >
                        <Layout style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Text>{JSON.stringify(slug)}</Text>
                        </Layout>
                    </Layout>
                </ScrollView>
            </SafeAreaView>
        </Layout>
    );
};
