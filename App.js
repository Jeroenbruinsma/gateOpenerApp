import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";


const callApi = () => {
fetch('http://192.168.178.221:5000/gate', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    mainGate: 'open',
    code: "123"
  
  }),
});
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Codaisseur gateOpener</Text>

      <Image
        style={{ width: 300, height: 300 }}
        source={require("./assets/logo.png")}
      />

      <Button
        title="Open the gate"
        onPress={() => callApi(123)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
