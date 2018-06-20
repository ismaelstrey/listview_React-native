import React, { Component } from 'react';
import {  View } from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
        constructor(props) {
        super(props);
        this.state = { listaItens: [] };
    }
    
componentWillMount() {
    let config = { auth: { username: "api", password: "4697bee64f29ae6c6ef0e3d6ed394204" }};
                               const server = "http://faus.com.br/recursos/c/dmairr/api/itens.html";
                            // const server = "http://192.168.2.25:3000/clientes";
                            // const server = " http://192.168.2.200/api/cliente/listAll" ;

                       axios
                           .get(server, { headers: config })
                         .then(response => {
                           this.setState({
                             listaItens: response.data
                           });
                            //  console.log(response);
                         })
                         .catch(() => {
                           console.log("Erro ao recuperar os dados");
                         });
                     }

    render() {
        
        return <View>
            
            {this.state.listaItens.map(item =>(<Itens key={ item.titulo } item = {item}/>)) }
            {/* {this.state.listaItens.map(item => (console.log(item)))} */}
            
            </View>;
    }
}

// export default ListaItens;
