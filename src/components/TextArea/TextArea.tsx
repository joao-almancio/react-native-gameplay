import React from "react";

import { View, TextInput, TextInputProps } from "react-native";

import { styles } from './TextArea.style'

export function TextArea({...rest}: TextInputProps) {
  return (
    <TextInput 
    style={styles.container}
    {...rest}
    />
  )
}