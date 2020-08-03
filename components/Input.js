import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input ( props ) {
    return <TextInput {...props} style={{...sty.input, ...props.style}}/>;
}

const sty = StyleSheet.create({
    input: {
        height: 40,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        paddingVertical: 10,
    }
});