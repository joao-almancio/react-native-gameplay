import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './CategorySelect.style';
import { categories } from '../../utils/categories';
import { Category } from '../Category/Category';

type Props = {
  categorySelected: string,
  setCategory: (categoryId: string) => void,
  hasCheckbox?: boolean
}

export function CategorySelect({categorySelected, setCategory, hasCheckbox = false}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => {
          return (
            <Category
              key={category.id}
              title={category.title}
              icon={category.icon}
              checked={category.id === categorySelected}
              onPress={()=> setCategory(category.id)}
              hasCheckBox={hasCheckbox}
            />
          )
        })
      }

    </ScrollView>
  )
}