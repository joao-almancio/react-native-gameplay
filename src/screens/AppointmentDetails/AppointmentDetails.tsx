import React, { ReactNode, useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import * as Linking from 'expo-linking'

import { ImageBackground, Text, View, FlatList, Alert, Share, Platform } from 'react-native'
import { Background } from '../../components/Background/Background';
import { Header } from '../../components/Header/Header';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ListHeader } from '../../components/ListHeader/ListHeader';
import { Member, MemberProps } from '../../components/Member/Member';
import { ListDivider } from '../../components/ListDivider/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { AppointmentProps } from '../../components/Appointment/Appointment';
import { Load } from '../../components/Load/Load';

import { styles } from "./AppointmentDetails.style"
import { theme } from '../../global/styles/theme'
import { Fontisto } from "@expo/vector-icons"
import BannerPng from '../../assets/banner.png'
import { api } from '../../services/api';

type Params = {
  guildSelected: AppointmentProps
}

type Props = {
  children: ReactNode
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number
}

export function AppointmentDetails({ children }: Props) {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [widgetActivated, setWidgetActivated] = useState(false)
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);
      setWidgetActivated(true)
    } catch {
      navigation.navigate("Home")
      Alert.alert('Verifique asa configurações do servidor.', 'Será que o Widget está habilitado?')
      setWidgetActivated(false)
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite;


    Share.share({
      message,
      url: widget.instant_invite
    })
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        action={
          guildSelected.guild.owner && <BorderlessButton onPress={handleShareInvitation}>
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
            {guildSelected.guild.name}
          </Text>
          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>
      {loading && !widget.members ? <Load />
        : <>
          <ListHeader
            title={'Jogadores'}
            subtitle={`total: ${widget.members?.length}`} />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      }

      <View style={styles.footer} >
        {
          guildSelected.guild.owner &&
          <ButtonIcon
            title={"Entrar na partida"}
            onPress={handleOpenGuild}
          />
        }
      </View>
    </Background>
  )
}