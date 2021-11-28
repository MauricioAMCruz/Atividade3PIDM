import React, { Component } from "react";
import {View,Text,TextInput,Button} from 'react-native'

import IMCCalc from './IMCCalc'

export default class IMCApp extends Component {

    constructor(props){
        super(props)
        this.state = {altura:null,peso:null,apertou:false}
    }

    acaoBotao = ()=> {
        if(this.state.altura!=null && this.state.peso!=null)
            this.setState({apertou:true})
    }

    renderizarCalculo(){
        if(this.state.apertou)
        {
            // this.setState({apertou:false})
            return(
                <IMCCalc altura={this.state.altura} peso={this.state.peso}>

                </IMCCalc>
            )
        }
        return null
    }

    render(){
        return(
        <View style={styles.container}>
            <TextInput>
                style={{height:60, fontSize:32}}
                placeholder = 'Digite a altura'
                onChangeText={(altura)=>this.setState({altura:altura})}
            </TextInput>
            <TextInput>
                style={{height:60, fontSize:32}}
                placeholder = 'Digite o peso'
                onChangeText={(peso)=>this.setState({peso:peso})}
            </TextInput>
            <Button>
                title='Calcular IMC'
                onPress={this.acaoBotao}
            </Button>
            {this.renderizarCalculo()}
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }); 


