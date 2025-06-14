import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import icedCoffe from '@/assets/images/coffee-stock.jpg';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffe} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.text}>Coffee Shop</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark transparent background
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
