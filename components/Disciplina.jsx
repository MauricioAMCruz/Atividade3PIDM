import React, {Component} from 'react'
import {Text,View} from 'react-native'

export default class Disciplina extends Component{
    render(){
        return (
            <View>
            <Text>
                   Disciplina: {this.props.disciplina}
                </Text>
            </View>
        )
    }
}