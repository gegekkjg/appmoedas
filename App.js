import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker'
import { useState } from 'react';

export default function App() {
  const [moedaOrigem, setMoedaorigem,] = useState('')
  const [moedaDestino, setMoedaDestino,] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.centro}>
        <Text style={styles.moeda1}>Moeda 1</Text>
        <View style={styles.viewInpu}>
          <Picker 
          selectedValue={moedaOrigem} 
          onValueChange={(itemValue, itemIndex) => setMoedaorigem(itemValue)}>
            <Picker.item label="Real Brasileiro" valeu= "BRL" />
            <Picker.item label="Dolar Americano" valeu="USD" />
            <Picker.item label="Ouro" valeu="XAU" />
            <Picker.item label="Bitcoin" valeu="BTC" />
          </Picker>
        </View>
        <Text style={styles.moeda2}>Moeda 2</Text>
        <View style={styles.viewInpu}>
        <Picker 
        selectedValue={moedaDestino} 
        onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}>
            <Picker.item label="Real Brasileiro" valeu= "BRL" />
            <Picker.item label="Dolar Americano" valeu="USD" />
            <Picker.item label="Ouro" valeu="XAU" />
            <Picker.item label="Bitcoin" valeu="BTC" />
          </Picker>
        </View>
      </View>
      <Pressable style={styles.botao}><Text>Começar</Text></Pressable>
      <StatusBar style="auto"/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6d4e1',
  },
  moeda1:{
    color:'#fff'
  },
  moeda2:{
    color:'#fff'
  },
  viewInput:{
    borderWidth: 2,
    borderColor: '#ebe7e0',
    height: 30,
    flexDirection: 'row',
    backgroundColor: '#c6d4e1',
    alignItems: 'center',
    width: 150,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 20
  },
  botao:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 90,
    elevation: 3,
    backgroundColor: '#7ECECA',
    width: '80%',
    height: 60,
    padding: 20,
    flexDirection: 'row',
    marginTop: 6,
  },
  centro:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});
