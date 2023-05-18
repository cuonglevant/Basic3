import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://cdn.haitrieu.com/wp-content/uploads/2022/11/Logo-Truong-Dai-hoc-CNTT-va-Truyen-thong-Viet-Han-Dai-hoc-Da-Nang.png' }} style={styles.logo} />

      <Text style={styles.title}>Credit</Text>
      <Text style={styles.text}>Made by: Le Nguyen Van Cuong-21IT006</Text>
      <Text style={styles.text}>
        With a precious contribution of: Ho Nguyen Bang-21IT004
      </Text>
      <Text style={styles.text}>
        All the data from the internet and the book: React Native in Action
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
});

export default FavoriteScreen;
