import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

export default class Itens extends Component {
  
    render() {
        
        return <View style={styles.itens}>
            <View style={styles.itensImage}>
              <Image source={{ uri: this.props.item.foto }} style={styles.image} />
            </View>
            <View style={styles.itensText}>
                <Text style={styles.itensTextTitulo} >{this.props.item.titulo}</Text>
                <Text style={styles.itensTextValor} >R$ {this.props.item.valor}</Text>
                <Text style={styles.itensTextAnuncio} >{this.props.item.local_anuncio}</Text>
                <Text style={styles.itensTextData} >Data Publi:{this.props.item.data_publicacao}</Text>
            </View>
          </View>;
    }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  itens: {
    borderWidth: 0.5,
    margin: 5,
    borderColor: "#999",
    flexDirection: "row",
    backgroundColor: "rgba(2, 179, 192, 0.36)",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15
  },
  itensText: {
    padding: 10,
    marginLeft: 20,
    flex: 1
  },
  itensTextTitulo: {
    fontSize: 18,
      color: "#ff4000"
  },
  itensTextValor: {
    fontWeight: "bold",
    color: "#FFF"
  },
  itensTextAnuncio: {
    color: "#FFF"
  },
  itensTextData: {
    color: "#FFF",
    textDecorationLine: "underline"
  },
  itensImage: {
    padding: 10,
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    opacity: 0.9
  }
});

