import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Components
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san francisco',
        },
      });
      setResults(res.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong!');
    }
  };
  console.log(results);
  return (
    <View style={{ height: 100 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={{}}>{results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
