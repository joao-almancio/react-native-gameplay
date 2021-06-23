import React from "react";

import { View, TextInput, TextInputProps } from "react-native";

import { styles } from './SmallInput.style'

export function SmallInput({...rest}: TextInputProps) {
  return (
    <TextInput 
    style={styles.container}
    {...rest}
    keyboardType='numeric'
    />
  )
}