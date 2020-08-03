import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function GameOver () {

    const navigation = useNavigation();
    const Route = useRoute();
    const selectedNumber = Route.params.selectedNumber;
    const rounds = Route.params.rounds;
    return (
        <View style={ sty.screen }>
            <Text style={{color: "red"}}> GameOver! </Text>
            <Text> Rodadas: { rounds }</Text>
            <Text> O numero era: { selectedNumber } </Text>
            <Button 
                title="JOGAR NOVAMENTE!"
                onPress={ () => navigation.navigate("StartGame") }
            />
        </View>
    );
}

const sty = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});