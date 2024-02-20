import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import HomeScreen from './screens/Home';
import React from "react";

const client = new ApolloClient({
  uri: 'https://gaard.ca/gaardql',
  cache: new InMemoryCache({ addTypename: false })
});


const App = () =>{
  return (
      <ApolloProvider client={client}>
          <View style={styles.container}>
            <HomeScreen />
            <StatusBar style="auto" />
          </View>
      </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
