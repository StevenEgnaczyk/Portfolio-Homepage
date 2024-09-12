import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const APIScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://your-flask-app.onrender.com/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <Text>{data ? data : 'Loading...'}</Text>
    </View>
  );
};

export default APIScreen;
