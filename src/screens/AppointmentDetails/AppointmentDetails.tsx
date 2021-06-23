import React, { ReactNode } from 'react'

import { ImageBackground, Text, View, FlatList } from 'react-native'
import { Background } from '../../components/Background/Background';
import { Header } from '../../components/Header/Header';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ListHeader } from '../../components/ListHeader/ListHeader';
import { Member } from '../../components/Member/Member';
import { ListDivider } from '../../components/ListDivider/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';

import { styles } from "./AppointmentDetails.style"
import { theme } from '../../global/styles/theme'
import { Fontisto } from "@expo/vector-icons"
import BannerPng from '../../assets/banner.png'

type Props = {
  children: ReactNode
}

export function AppointmentDetails({ children }: Props) {
  const members = [
    {
      id: '1',
      username: 'rodrigo',
      avatarUrl: 'https://github.com/joao-almancio.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'rodrigo',
      avatarUrl: 'https://github.com/joao-almancio.png',
      status: 'offline'
    },
  ]
  return (
    <Background>
      <Header
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
        title={'Detalhes'}
      />

      <ImageBackground
        source={BannerPng}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendário
          </Text>
          <Text style={styles.subtitle}>
            È hoje que vamos chegar no chalenger
          </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title={'Jogadores'}
        subtitle={'total 3'} />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer} >
        <ButtonIcon title={"Entrar na partida"} />
      </View>
    </Background>
  )
}