import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

// api
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };

  if (!result) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width: 240, height: 120 }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
