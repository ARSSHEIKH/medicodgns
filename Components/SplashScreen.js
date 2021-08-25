
import { StyleSheet, Image, Text, View } from 'react-native';
import { history, useHistory } from "react-router-native";
import React from 'react';

export default function SplashScreen() {
  const history = useHistory()

  setTimeout(() => {
    history.push("/Login");
  }, 2000);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Welcome to Medicodgns
      </Text>
      <Image 
        source={require("../assets/images/loadingGif2.gif")}
        width="100"
      />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
//