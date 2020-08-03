import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

function genereteRandomNumber ( min, max, exclude ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    let rndNum = Math.floor( Math.random() * (max - min)) + min;

    if ( rndNum === exclude ) {
        return genereteRandomNumber( min, max, exclude )
    } else {
        return rndNum;
    }    
}

export default function GameScreen () {

    const [ machineGuess, setMachineGuess ] = useState( 
        genereteRandomNumber( 1, 100, selectedNumber ) 
    );
    const [ rounds, setRounds ] = useState(0);

    const lower = useRef(1);
    const greater = useRef(100);

    const navigation = useNavigation();
    const Route = useRoute();
    const selectedNumber = Route.params.selectedNumber;

    useEffect( () => {
        if ( machineGuess === selectedNumber ) {
            navigation.navigate("GameOver", { selectedNumber, rounds });
        }        
    }, [machineGuess, selectedNumber, rounds]);

    function guessHanler ( direction ) {
        if (( machineGuess > selectedNumber && direction === "maior") ||
            ( machineGuess < selectedNumber && direction === "menor")
        ) {
            Alert.alert("Não Minta!", "Você sabe que esta errado!", 
            [{ text: "Okay!", style: "cancel" }]);
            return;
        }

        if ( direction === "menor") {
            greater.current = machineGuess - 1;
        } else {
            lower.current = machineGuess + 1;
        }

        setMachineGuess(
            genereteRandomNumber( 
                lower.current, 
                greater.current,
                machineGuess 
            )
        );

        setRounds( rds => rds += 1 );
    }

    return (
        <View style={ sty.screen }>
            <Text> A maquina chutou: </Text>
            <NumberContainer style={ sty.numberContainer }>
                { machineGuess }
            </NumberContainer>
            <Card style={ sty.card }>
                <Button 
                    title="MENOR" 
                    onPress={ guessHanler.bind(this, "menor") }    
                />
                <Button 
                    title="MAIOR" 
                    onPress={ guessHanler.bind(this, "maior") }
                />
            </Card>

            <Button 
                onPress={ navigation.goBack.bind(this) } 
                title="Voltar"    
            />
        </View>
    );
}

const sty = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 280,
        maxWidth: "80%",
    }
});