import { View, Text, StyleSheet } from 'react-native';

const IdealWeight = ({ altura }) => {
  if (!altura) return null;

  const alturaMetros = parseFloat(altura) / 100;
  const pesoMin = (18.5 * alturaMetros * alturaMetros).toFixed(2);
  const pesoMax = (24.9 * alturaMetros * alturaMetros).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Peso ideal entre {pesoMin} kg e {pesoMax} kg
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default IdealWeight;
