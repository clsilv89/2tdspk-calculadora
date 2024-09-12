import CalculatorButton from '@/components/CalculatorButton';
import Display from '@/components/Display';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PostType } from '../models/post.interface';
import { Post } from '@/components/AxiosComponent';

export default function HomeScreen() {  
  const ASYNC_KEY = 'MEMORY_SAVED'

  const [displayValue, setDisplayValue] = useState('0')
  const [operation, setOperation] = useState('')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [values, setValues] = useState([0, 0])
  const [position, setPosition] = useState(0)

  useEffect(() => {
    fetchData()
  })

  async function fetchData() {
    const response = await Post.getPosts()
    console.log(response)
  }

  function funcClearDisplay() {
    setPosition(0)
    setValues([0, 0])
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation('')
  }

  async function saveData(n: string) {
    try {
      AsyncStorage.setItem(
        ASYNC_KEY, 
        n
      )
    } catch (e) {
      alert
    }
  }

  async function recoverData() {
    try {
      const value = await AsyncStorage.getItem(
        ASYNC_KEY
      )
  
      const vals = [...values]
      vals[position] = parseFloat(value ? value : '0')
      setValues([...vals])
      setDisplayValue(value ? value : '0')
    } catch (e) {
      alert(e)
    }
  }

  async function eraseAllData() {
    try {
      AsyncStorage.clear()
    } catch (e) {
      alert(e)
    }
  }

  function addOperation(o: string) {
    if (o === 'x') {
      o = '*'
    }
    if (o === '%') {
      const vals = [...values]
      const newValue = parseFloat(displayValue) / 100
      setDisplayValue(newValue.toString())
      vals[position] = newValue
      setValues([...vals])
      setClearDisplay(true)
      return
    }
    if (position === 0) {
      setOperation(o)
      setPosition(1)
      setClearDisplay(true)
    } else {
      const vals = [...values]
      try {
        console.log(`${vals[0]} ${operation} ${vals[1]}`)
        vals[0] = eval(`${vals[0]} ${operation} ${vals[1]}`)
      } catch (e) {
        alert(e)
      }
      setDisplayValue(vals[0].toString())
      setOperation('')
      setPosition(0)
      setClearDisplay(true)
      setValues([...vals])
    }
  }

  function invertValues() {
    const current = displayValue
    const newValue = parseFloat(current) * -1
    const vals = [...values]
    vals[position] = newValue
    setValues([...vals])
    setDisplayValue(newValue.toString())
  }

  function addDigit(n: string) {
    if (n === ',') {
      n = '.'
    }
    if (n === '.' && displayValue.includes('.')) {
      return
    }
    const isDecimal = n === '.'
    const localClearDisplay = !isDecimal && (clearDisplay || displayValue ==='0')
    const current = localClearDisplay ? '' : displayValue
    const newValue = current + n
    setDisplayValue(newValue)
    setClearDisplay(false)

    const calcValue = parseFloat(newValue)
    const vals = [...values]
    vals[position] = calcValue
    setValues([...vals])
  }

  return (
    <View style={styles.container}>
      <Display text={displayValue} />
      <View style={styles.buttonsContainer}>
        <CalculatorButton text='MC' memory={true} onClick={() => eraseAllData() } />
        <CalculatorButton text='M+' memory={true} onClick={() => saveData(displayValue)} />
        <CalculatorButton text='MR' double={true} memory={true} onClick={() => recoverData()} />
        <CalculatorButton text='C' other={true} onClick={() => funcClearDisplay()} />
        <CalculatorButton text='+/-' other={true} onClick={() => invertValues() } />
        <CalculatorButton text='%' other={true} onClick={(label) => addOperation(label) } />
        <CalculatorButton text='/' operation={true} onClick={(label) => addOperation(label)} />
        <CalculatorButton text='7' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='8' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='9' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='x' operation={true} onClick={(label) => { addOperation(label) }} />
        <CalculatorButton text='4' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='5' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='6' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='-' operation={true} onClick={(label) => { addOperation(label) }} />
        <CalculatorButton text='1' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='2' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='3' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='+' operation={true} onClick={(label) => { addOperation(label) }} />
        <CalculatorButton text='0' double={true} onClick={(label) => addDigit(label)} />
        <CalculatorButton text=',' onClick={(label) => addDigit(label)} />
        <CalculatorButton text='=' operation={true} onClick={(label) => { addOperation(label) }} />
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
