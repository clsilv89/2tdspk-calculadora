import { Image, StyleSheet, Platform, View } from 'react-native';
import Display from '@/components/Display';
import CalculatorButton from '@/components/CalculatorButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Display />
      <View style={styles.buttonsContainer}>
        <CalculatorButton text='C' other={true} onClick={(label) => {console.log('Clicou no botão ' + label)}} />
        <CalculatorButton text='+/-' other={true} onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='%' other={true} onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='/' operation={true} onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='7' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='8' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='9' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='x' operation={true} onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='4' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='5' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='6' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='-' operation={true} onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='1' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='2' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='3' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='+' operation={true} onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='0' double={true} onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text=',' onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
        <CalculatorButton text='=' operation={true} onClick={(label) => {console.log('Clicou no botão ' + label)}}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
