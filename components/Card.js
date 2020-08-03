import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card ( props ) {
    return (
        <View style={{ ...sty.card, ...props.style, }}>
            {props.children}
        </View>
    );
}

const sty = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#fff",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5
    }
});
