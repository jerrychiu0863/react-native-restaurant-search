import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san francisco',
        },
      });
      setResults(res.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong!');
    }
  };
  
  return [searchApi, results, errorMessage];
};
