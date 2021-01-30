import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>Resutl: {results.length}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        style={{}}
        data={results}
        renderItem={({ item }) => (
          <Text style={{ borderWidth: 1, borderColor: 'red' }}>
            {item.name} {item.price}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
