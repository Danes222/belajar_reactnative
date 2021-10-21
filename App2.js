import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, color: "white" }}>DANES</Text>
      <StatusBar style="auto" />
      <Button title='launch introduction' onPress={() => {alert("My name is Danes Nizam Virnanda. I'm 16 years old (2020). My house is in the west section of Kediri, and I am not married yet. I study as a student in the SMK TI Pelita Nusantara, and I get home every day by 10 AM at the latest.I don't smoke. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning.I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness")}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
