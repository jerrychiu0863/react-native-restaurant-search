import axios from 'axios';
import { APIkey } from '../../config';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${APIkey}`,
  },
});
