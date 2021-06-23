import React from "react";
import { 
  View, 
  Text,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./Avatar.style";
import { theme } from "../../global/styles/theme";
const { secondary50, secondary70 } = theme.colors;

type Props = {
  urlImage: string
}

export function Avatar({urlImage}: Props) {
  return (
    <LinearGradient
    style={styles.container}
    colors={[secondary50, secondary70]}
    >
      <Image 
      source={{uri: urlImage}}
      style={styles.avatar}
      />
    </LinearGradient>
  )
}