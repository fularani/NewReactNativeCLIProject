import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React from 'react';
import {HomeScreenNavigationProp} from '../navigation/BottomTabs';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    name: 'Luke Skywalker',
    birth_year: '19BBY',
  },
  {
    id: 2,
    name: 'C-3PO',
    birth_year: '112BBY',
  },
  {
    id: 3,
    name: 'R2-D2',
    birth_year: '33BBY',
  },
  {
    id: 4,
    name: 'Darth Vader',
    birth_year: '41.9BBY',
  },
  {
    id: 5,
    name: 'Leia Organa',
    birth_year: '19BBY',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const renderListItems = ({item}: any) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            name: item.name,
            birthYear: item.birth_year,
          })
        }>
        <Text style={styles.textStyle}>{item.name}</Text>
        <View style={styles.line} />
      </Pressable>
    );
  };

  return (
    <View style={styles.screenContainer}>
      <Pressable
        onPress={() => navigation.navigate('Feed')}
        style={styles.pressableStyle}>
        <Text style={styles.textInsidepressable}>Go to Feed screen</Text>
      </Pressable>
      <FlatList data={DATA} renderItem={renderListItems} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 10,
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  textStyle: {
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  pressableStyle: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
    margin: 12,
    alignItems: 'center',
  },
  textInsidepressable: {
    fontSize: 16,
    fontWeight: '600',
  },
});
