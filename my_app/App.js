import React from "react";
import CustomInput from "react-native-customized-box";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [getValue, setValue] = useState();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("/Users/rishuchowdhary/Downloads/ELINA/Download_now/react-personal-project/reac-project/custom_package/test_folder/my_app/assets/register.png")}
        style={styles.login}
        // resizeMode="contain"
      />

      <View>
        <Text style={{ fontSize: 50, color: "#253329" }}>Login</Text>
      </View>

      <CustomInput
        placeholder={"Username"}
        boxColor={"dodgerblue"}
        focusColor={"#33ff00"}
        boxStyle={{ borderRadius: 40, borderWidth: 2, borderStyle: "dashed" }}
        inputStyle={{ textAlign: "center", fontWeight: "bold", color: "red" }}
        labelConfig={{
          text: "Username",
          style: {
            color: "#1f5212",
            fontWeight: "bold",
          },
        }}
        requiredConfig={{
          text: "*This is Required",
        }}
      />
      <CustomInput
        placeholder={"Password"}
        toggle={true}
        boxColor={"dodgerblue"}
        focusColor={"#33ff00"}
        boxStyle={{ borderRadius: 40, borderWidth: 2 }}
        inputStyle={{ fontWeight: "bold", color: "red" }}
        labelConfig={{
          text: "Password",
          style: {
            color: "#0e0e21",
            fontWeight: "bold",
          },
        }}
        requiredConfig={{
          text: "*Add Custom Message and decoreate your own",
          style: { textAlign: "center", textDecorationLine: "underline" },
        }}
      />

      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          marginTop: 20,
          borderRadius: 5,
          backgroundColor: "#f73707",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 40,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          LogIn
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginTop: -20,
  },
});
