import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native'

import { styles } from './SignIn.style';
import Illustration from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { Background } from '../../components/Background/Background';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  }

  return (
    <Background>

      <View style={styles.container}>

        <Image
          source={Illustration}
          style={styles.image}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar no discord"
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  )
}