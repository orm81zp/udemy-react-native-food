import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect( () => {
    getResult(id);
  }, []);

  if (!result) {
    return  (
      <Text>Loading...</Text>
    );
  }

  const { photos = [] } = result;

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        data={photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item}} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  image: {
    height: 200,
    width: '100%',
    maxWidth: '100%',
    marginVertical: 10
  }
});

export default ResultsShowScreen;
