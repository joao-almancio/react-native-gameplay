import React from "react";

import { View, FlatList } from 'react-native'
import { Guild, GuildProps } from "../../components/Guild/Guild";
import { ListDivider } from "../../components/ListDivider/ListDivider";

import { styles } from "./Guilds.style";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelect}: Props) {
  const guilds = [
    { id: '1', name: 'lendários', icon: 'opaa', owner: true },
    { id: '2', name: 'GameMasters', icon: 'opaa', owner: false }
  ]
  return (
    <View style={styles.container}>
      <FlatList 
      data={guilds}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Guild 
        data={item}
        onPress={() => handleGuildSelect(item)}
        />
      )}
      ItemSeparatorComponent={()=><ListDivider />}
      showsVerticalScrollIndicator={false}
      style={styles.guilds}
      />
    </View>
  )
}