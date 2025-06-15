import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import icedCoffe from '@/assets/images/coffee-stock.jpg';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffe} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Coffee Shop</Text>

          <Link href="/contact" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </Pressable>
          </Link>
          <Link href="/menu" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>menu</Text>
            </Pressable>
          </Link>
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
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    gap: 20,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#d2691e',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
