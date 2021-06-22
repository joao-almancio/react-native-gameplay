import React from 'react';

import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import { styles } from './ButtonIcon.style';
import discordImg from "../../assets/discord.png"

type Props = {
  title: string
}
export default function ButtonIcon({title}: Props) {
  return (
    <TouchableOpacity 
    style={styles.container}
    activeOpacity={0.8}
    >
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon}/>
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}