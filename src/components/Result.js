import React from "react";
import { Text, StyleSheet } from "react-native";

//função para obter o resultado
const Result = ({ imc }) => {
    return (
        <text style={StyleSheet.result}>Seu IMC é: {imc} </text>
    );
};

// Estilização do resultado
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Result;