import React from 'react';

import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native'

import { styles } from './SignIn.style';
import Illustration from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { Background } from '../../components/Background/Background';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

export function SignIn() {
  const { loading, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error)
    }
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

          {
            loading
              ? <ActivityIndicator color={theme.colors.primary} />
              : <ButtonIcon
                title="Entrar no discord"
                onPress={handleSignIn}
              />
          }
        </View>
      </View>
    </Background>
  )
}