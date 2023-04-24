import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

const FeedScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.textStyle}>Feed Screen</Text>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 18,
  },
});
