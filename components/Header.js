import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function Header ( props ) {
    return (
        <View style={ sty.header }>
            <Text style={ sty.headerTitle }>{ props.title }</Text>
        </View>
    );
}

const sty = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primery,
        alignItems: "center",
        justifyContent: "center"
    },

    headerTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "700"
    }
});
