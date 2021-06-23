import React, { ReactNode, useState } from 'react'

import { ImageBackground, Text, View, FlatList, ScrollView, KeyboardAvoidingView, Platform, Modal } from 'react-native'
import { Background } from '../../components/Background/Background';
import { Header } from '../../components/Header/Header';
import { CategorySelect } from '../../components/CategorySelect/CategorySelect';
import { RectButton } from 'react-native-gesture-handler';
import { GuildIcon } from '../../components/GuildIcon/GuildIcon';
import { SmallInput } from '../../components/SmallInput/SmallInput';
import { TextArea } from '../../components/TextArea/TextArea';
import { Button } from '../../components/Button/Button';
import { ModalView } from '../../components/ModalView/ModalView';
import { Guilds } from '../Guilds/Guilds';

import { styles } from "./AppointmentCreate.style";
import { theme } from '../../global/styles/theme'
import { Feather } from '@expo/vector-icons'
import { GuildProps } from '../../components/Guild/Guild'

type Props = {
  children: ReactNode
}

export function AppointmentCreate({ children }: Props) {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const handleOpenGuilds = () => {
    setOpenGuildsModal(true)
  }

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect)
    setOpenGuildsModal(false)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>

        <Background>
          <Header
            title={'Agendar partida'}
          />

          <Text style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 }
          ]}>
            Categoria
          </Text>

          <CategorySelect
            hasCheckbox
            setCategory={setCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon 
                  ? <GuildIcon /> 
                  : <View style={styles.image} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name='chevron-right'
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>
                  Dia e mês
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    /
                  </Text>
                  <SmallInput maxLength={2} />
                </View>

              </View>

              <View>
                <Text style={styles.label}>
                  Hora e minito
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>
                    :
                  </Text>
                  <SmallInput maxLength={2} />
                </View>

              </View>

            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Text style={styles.caracteresLimit}>
                Max 100 caracteres
              </Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <Button
                title="Agendar"
              />
            </View>


          </View>

        </Background>
      </ScrollView>

      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}