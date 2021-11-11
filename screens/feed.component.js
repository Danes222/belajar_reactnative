import React, { useState } from "react";
import { SafeAreaView, TextInput, ScrollView, Image } from "react-native";
import { Divider, Button, Layout, Text } from "@ui-kitten/components";

export const FeedScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [sq, setSq] = useState([]);

  const search = () => {
    fetch("http://www.omdbapi.com/?apikey=f4674f5&s=" + sq)
      .then((response) => response.json())
      .then((json) => {
        if (json.Response === "True") {
          setData(json.Search);
        } else {
          return false;
        }
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1 }}>
        <ScrollView keyboardDismissMode="none">
          <Divider />
          <Layout
            style={{
              flex: 1,
              paddingHorizontal: 15,
              paddingTop: 40,
              paddingBottom: 40,
            }}
          >
            <Layout
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  width: "60%",
                  height: 50,
                }}
                onChangeText={(sq) => setSq(sq)}
              />
              <Button style={{ height: 50, width: "35%" }} onPress={search}>
                CARI FILM
              </Button>
            </Layout>

            <Layout
              style={{
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {data.map((item, index) => {
                return (
                  <Layout
                    key={index}
                    style={{
                      marginHorizontal: 5,
                      borderWidth: 1,
                      borderColor: "red",
                      marginBottom: 20,
                      height: 270,
                      width: 150,
                      overflow: "hidden",
                    }}
                  >
                    <Layout style={{ height: "80%", width: "100%" }}>
                      <Image
                        source={{
                          uri: item.Poster,
                          width: "100%",
                          height: "100%",
                        }}
                      ></Image>
                    </Layout>
                    <Text style={{ marginHorizontal: 5 }}>{item.Title}</Text>
                    <Text style={{ marginHorizontal: 5 }}>{item.Year}</Text>
                  </Layout>
                );
              })}
            </Layout>
          </Layout>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};
