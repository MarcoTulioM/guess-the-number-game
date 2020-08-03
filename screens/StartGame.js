import React, { useState } from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet,

    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/Colors";

export default function ( props ) {

    const [ enteredValue, setEnteredValue ] = useState("");
    const [ confirmed, setConfirmed ] = useState(false);
    const [ selectedNumber, setSelectedNumber ] = useState(); 

    function inputHandler ( value ) {
        setEnteredValue( value.replace( /[^0-9]/g, "") );
    }

    /* Após "confirmed" reseber "true",
    "selectedNumber" recebe "entredValue" e "entredValue" 
    recebe um string vazia.
    */
    function confirmInput () {
        const number = parseInt( enteredValue );
        if ( isNaN( number ) || number <= 0 || number > 99 ) {
            Alert.alert(
                "Valor Inválido:",
                "O valor deve estar entre 1 e 99!",
                [{
                    text: "Okay!",
                    style: "destructive",
                    onPress: resetInput
                }]
            );
            return;
        }
        setConfirmed( true );
        setSelectedNumber( number );
        setEnteredValue( "" );

        Keyboard.dismiss();
    }
    function resetInput () {
            setEnteredValue("");  
            setConfirmed(false);
    }

    function navigateToGameScreen () {
        navigation.navigate("GameScreen", { selectedNumber });
        setSelectedNumber(null);
        setConfirmed(false);
    }

    const navigation = useNavigation();
    let showNumberContainer;
    if( confirmed ) {
        showNumberContainer = ( 
            <Card style={ sty.numberContainer }>
                <Text> Numero que você escolheu: </Text>
                <NumberContainer>{ selectedNumber }</NumberContainer>
                <Button 
                    title="COMEÇAR!"
                    onPress={ navigateToGameScreen } 
                />
            </Card>
        );
    };

    return (
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
            <View style={ sty.screen }>
                <Text style={ sty.title }>Novo Jogo!</Text>

                <Card style={ sty.inputContainer }>
                    <Text>Escolha um numero:</Text>

                    <Input 
                        maxLength={2}
                        blurOnSubmit
                        autoCorrect={false}
                        autoCaptalize="none"
                        keyboardType="number-pad"

                        onChangeText={ inputHandler } // "value" é passado por padrão.
                        value={ enteredValue }

                        style={ sty.input }
                    />

                    <View style={ sty.buttonsContainer }>
                        <View style={ sty.button }>
                            <Button 
                                title="Resetar" 
                                color={ Colors.accent }
                                onPress={ resetInput }
                            />
                        </View>
                        <View style={ sty.button }>
                            <Button 
                                title="Confirmar" 
                                color={ Colors.primery }
                                onPress={ confirmInput }
                            />
                        </View>
                    </View>
                </Card>
                { showNumberContainer }
            </View>
        </TouchableWithoutFeedback>
    );
}

const sty = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    
    title: {
        fontSize: 20,
        marginVertical: 12,

    },

    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },

    buttonsContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    button: {
        width: 100
    },

    input: {
        width: 50,
        textAlign: "center"
    },

    numberContainer: {
        marginTop: 22,
        alignItems: "center",
        justifyContent: "center"
    }
});
