import { Text, StyleSheet } from "react-native";

// Componente de título para a tela de IMC
const Title = () => {
    return (
        <Text style={StyleSheet.title}>Calculadora de IMC</Text>
    );
};

// Estilização do título
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});


export default Title;