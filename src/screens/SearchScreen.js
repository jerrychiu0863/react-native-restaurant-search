import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.background}>
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gray',
    height: 50,
    borderRadius: 5,
    margin: 15,
  },
});

export default SearchScreen;
