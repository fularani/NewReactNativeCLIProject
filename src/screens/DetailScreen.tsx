import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackNavigatorParamList} from '../navigation/HomeStackNavigator';

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Details'
>;

export default function DetailScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const {name, birthYear} = route.params;
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.textStyle}>Name: {name}</Text>
      <Text style={styles.textStyle}>Birth Year: {birthYear}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 18,
    paddingBottom: 12,
  },
});
