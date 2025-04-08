import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import IdealWeight from './IdealWeight';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };

    const classificacao = () => {
        const valor = parseFloat(imc);
        if (valor < 18.5) return 'Você está abaixo do peso!';
        if (valor < 25) return 'Você está no peso ideal!';
        if (valor < 30) return 'Você está com sobrepeso!';
        if (valor < 35) return 'Você está com obesidade grau 1!';
        if (valor < 40) return 'você está com obesidade grau 2!';
        return "Você está com Obesidade grau 3!!! (mórbida)";
    }
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />

            {imc && (
  <>
    <Text style={styles.result}>IMC: {imc}</Text>
    <Text style={styles.result}>Classificação: {classificacao()}</Text>
    <IdealWeight altura={altura} />
  </>
)}
        </View>
    )};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;
