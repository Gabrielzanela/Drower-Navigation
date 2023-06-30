import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import React from 'react';
import { Image,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
   <Image
        style={styles.imagem}
        source={{
          uri: './assets/aleat.png',
        }}
      />
      <Text style={styles.titulo}>Tela 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold', 
  },

imagem: {
  alignItems: 'center',
  justifyContent: 'center',
  width: 300,
  height: 300,
  BorderRadius: 20,
},
paragrafo: {
  fontSize: 24,
  fontWeight: 'normal', 
}
});


