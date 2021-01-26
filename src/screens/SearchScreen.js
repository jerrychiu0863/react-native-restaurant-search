import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Components
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View style={{ height: 100 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('sumitted')}
      />
      <Text style={{ marginVertical: 10 }}>最愛黑皮嘟嘟村莊</Text>
      <Text style={{ marginVertical: 10 }}>雪莉村莊</Text>
      <Text style={{ marginVertical: 10 }}>珍妮佛羅培茲村莊</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
