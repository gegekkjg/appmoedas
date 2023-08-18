import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido,setValorConvertido] = useState('')
  const [valorOriginal, setValorOriginal] = useState('99.99999')
  
  const buscarHandle = async () =>{
    let URL = `https://economia.awesomeapi.com.br/last/${moedaOrigem}-${moedaDestino}`
    // setValorConvertido(URL)
    try{
      let page = await fetch(URL)
      let json = await page.json()
      console.log(json)
      let indice = parseFloat(json[`${moedaOrigem}${moedaDestino}`].high)
      setValorConvertido(indice)
      console.log(indice)
      // console.log(json[`USDBRL`].high)
    } catch (error){
      setValorConvertido(`Erro: ${error.message}`)
    }
  }

  const limparResultado = () =>{
    setValorConvertido('')
    setValorOriginal('33.3333')
    setMoedaOrigem('BRL')
    setMoedaDestino('USD')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}> Conversor de moedas</Text>
        <View>
      <Text style={styles.moeda}>Moeda 1</Text>
      <View style={styles.viewInput}>
      <Picker
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>
      </View>
      <View>
      <Text style={styles.moeda}>Moeda 2</Text>
      <View style={styles.viewInput}>
      <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dolar Americano" value="USD" />
          <Picker.Item label="Ouro" value="XAU" />
          <Picker.Item label="Bitcoin" value="BTC" />
        </Picker>
      </View>
      <View style={styles.viewInputdois}>
        <TextInput value={valorOriginal} onChangeText={setValorOriginal} keyboardType='numeric'/>
      </View>
      </View>
      <Pressable style={styles.botao1} onPress={buscarHandle}><Text>Buscar valor</Text></Pressable>
      <Pressable style={styles.botao} onPress={limparResultado}><Text>Limpar valor</Text></Pressable>
      <Text style={styles.botao}>{`Resultado: ${valorConvertido}`}</Text>
      <StatusBar style="auto" />
      </View>
    </View>  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdd6d2',
    textAlign: 'center',
  },
  titulo:{
    color: '#f6eddc',
    fontSize: 20,
    paddingBottom: 12,
  },
  viewInput:{
    borderWidth: 2,
    borderColor: '#e3e5d7',
    borderRadius: 30,
    marginVertical: 12,
  },
  moeda:{
    color: '#586875',
    fontSize: 17,
  },
  viewInputdois:{
    borderWidth: 2,
    borderColor: '#e3e5d7',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    height: 30,
    width: 100,
    fontSize: 15,
  },
  botao1:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#a5c8ca',
    marginTop: 12
  },
});