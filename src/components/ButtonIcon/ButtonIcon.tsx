import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './ButtonIcon.style';
import discordImg from "../../assets/discord.png"

type Props = RectButtonProps & {
  title: string
}
export function ButtonIcon({title, ...rest}: Props) {
  return (
    <RectButton 
    style={styles.container}
    activeOpacity={0.8}
    {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon}/>
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}