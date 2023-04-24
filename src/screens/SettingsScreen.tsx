import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

const SettingsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.textStyle}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

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
