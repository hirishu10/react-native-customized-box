import React, { useLayoutEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

function CustomInput({
  width,
  height,
  placeholder,
  boxStyle,
  inputStyle,
  labelConfig,
  requiredConfig,
  toggle,
  keyboardType,
  focusColor,
  boxColor,
  onChangeText,
  values,
}) {
  const [checkIconTF, setIconTF] = useState(true);
  const [icon, setIcon] = useState("");
  const [bordColor, setBorderColor] = useState(boxColor ? boxColor : "silver");

  const checkIcon = () => {
    if (checkIconTF) {
      setIconTF(false);
      setIcon("HIDE");
    } else {
      setIconTF(true);
      setIcon("SHOW");
    }
  };

  useLayoutEffect(() => {
    setIcon("SHOW");
  }, []);

  return (
    <View>
      <Text style={[InputStyle.label, labelConfig?.style]}>
        {labelConfig?.text}
      </Text>
      <View
        style={[
          InputStyle.wrapper,
          {
            borderColor: bordColor,
            width: width ? width : 300,
            height: height ? height : 50,
          },
          boxStyle,
        ]}
      >
        <TextInput
          style={[InputStyle.input, inputStyle]}
          placeholder={placeholder}
          keyboardType={
            keyboardType === "email-address" ||
            keyboardType === "name-phone-pad" ||
            keyboardType === "phone-pad" ||
            keyboardType === "default"
              ? keyboardType
              : "name-phone-pad"
          }
          secureTextEntry={toggle ? checkIconTF : false}
          onFocus={() => {
            setBorderColor(
              focusColor ? focusColor : boxColor ? boxColor : "silver"
            );
          }}
          onBlur={() => {
            setBorderColor(boxColor ? boxColor : "silver");
          }}
          onChangeText={onChangeText}
          value={values}
        />
        <View>
          {toggle ? (
            <TouchableOpacity
              disabled={toggle ? true : false}
              style={InputStyle.checkWrapper}
            >
              <Text style={InputStyle.check} onPress={checkIcon}>
                {toggle ? icon : ""}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {requiredConfig?.text && (
        <Text style={[InputStyle.required, requiredConfig.style]}>
          {requiredConfig.text}
        </Text>
      )}
    </View>
  );
}

const InputStyle = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderColor: "red",
    fontSize: 15,
  },
  label: {
    marginBottom: 5,
    marginTop: 5,
    fontSize: 14,
    color: "#1c1b1b",
  },
  checkWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    width: 50,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "grey",
  },
  required: {
    marginBottom: 15,
    paddingLeft: 2,
    color: "red",
  },
});

export default CustomInput;
