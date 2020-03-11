import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} />
      <Text>Search Bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 15
  }
});

export default SearchBar;
