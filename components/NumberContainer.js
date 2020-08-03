import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

export default function NumberContainer ( props ) {
    return (
        <View style={ sty.container }>
            <Text style={ sty.number }>{ props.children }</Text>
        </View>
    );
}

const sty = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10
    },

    number: {
        color: Colors.accent,
        fontSize: 22
    }
});