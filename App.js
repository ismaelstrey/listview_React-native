import React, { Component } from 'react';
import { ScrollView, StyleSheet, ImageBackground } from "react-native";
import ListaItens from './src/components/ListaItens';

export default class App extends Component {
  render() {
   
    return <ImageBackground style={styles.fundo} source={require('./img/back.jpg')}>
      <ScrollView>
        <ListaItens />
      </ScrollView>
    </ImageBackground>
   
  }
}
const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#0A475C"
  }
});
