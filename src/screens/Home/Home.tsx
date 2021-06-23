import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";

import { styles } from "./Home.style";

import { Profile } from "../../components/Profile/Profile";
import { ButtonAdd } from "../../components/ButtonAdd/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect/CategorySelect";
import { ListHeader } from "../../components/ListHeader/ListHeader";
import { ListDivider } from "../../components/ListDivider/ListDivider";
import { Background } from '../../components/Background/Background';


import { Appointment } from "../../components/Appointment/Appointment";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState('');

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const navigation = useNavigation();
  const handleAppointmentDetails = () => {
    navigation.navigate('AppointmentDetails')
  }
  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentCreate')
  }

  const appointments = [
    {
      id: '1',
      guild: { id: '1', name: 'Lendários', icon: null, owner: true },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar no chalenger'
    },
    {
      id: '2',
      guild: { id: '2', name: 'Lendários', icon: null, owner: true },
      category: '2',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar no chalenger'
    },
  ]

  return (
    <Background>

      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>

        <View>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />

          <View style={styles.content}>
            <ListHeader
              title="Partidas agendadas"
              subtitle="Total 6"
            />

            <FlatList
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
              <Appointment 
              data={item} 
              onPress={handleAppointmentDetails}
              />
              )}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListDivider />}
            />
          </View>
        </View>
      </View>
    </Background>
  )
}