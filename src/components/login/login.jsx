import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function login() {
  return (
    <View>
        <TextInput
    style={styles.input}
    onChangeText={onChangeNumber}
    value={number}
    placeholder="useless placeholder"
    keyboardType="numeric"
  />
    </View>
  )
}

const styles = StyleSheet.create({})