import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import { Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.imagem}
        source={{
          uri: '',
        }}

        
      />
      <StatusBar style="auto" />
      <Text style= {styles.titulo}>OPA tela 4</Text>
      <TouchableOpacity style={styles.sair}>
        <Text>Botão</Text>
      </TouchableOpacity>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justfyContent: 'right',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  imagem: {
    width: 300,
    height: 300,
    BorderRadius: 20,
  },
  inputlogin:{
    widht: 1000,
    borderRadius: 5,
    margin: 8,
    padding: 4.5,
    backgroundColor: 'rgba(0, 0, 300, 0.7)',
  },

  button:{
    margin: 15,
   padding: 8,
   textAlign: 'center',
   width: 100,
   borderRadius: 10,
   backgroundColor: '#rgba(0, 0, 0, 0.4)',
   fontSize: 10
 },

 sair: {
  margin: 1,
   padding: 8,
   textAlign: 'center',
   width: 80,
   borderRadius: 10,
   backgroundColor: '#rgba(0, 0, 0, 0.4)',
   fontSize: 10
 }
  
});
