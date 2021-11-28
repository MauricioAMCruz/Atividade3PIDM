import React, {Component} from 'react'
import {View,Text} from 'react-native'

const IMCMsg = (props)=> {

    if(props.IMC<17) return <Text style={{fontSize:32, fontWeight: 'bold', fontColor: 'red'}}>Muito abaixo do peso</Text>
    if(props.IMC>=17 && props.IMC<18.5) return <Text style={{fontSize:32, fontWeight: 'bold', fontColor: 'red'}}>Abaixo do peso</Text>
    if(props.IMC>=18.5 && props.IMC<25) return <Text style={{fontSize:32, fontWeight: 'bold', fontColor: 'blue'}}>Peso normal</Text>
    if(props.IMC>=25 && props.IMC<30) return <Text style={{fontSize:32, fontWeight: 'bold', fontColor: 'red'}}>Acima do peso</Text>
    if(props.IMC>=30 && props.IMC<35) return <Text style={{fontSize:32, fontWeight: 'bold', fontColor: 'red'}}>Obesidade I</Text>
    if(props.IMC>=35 && props.IMC<40) return <Text style={{fontSize:32, fontWeight: 'bold', fontColor: 'red'}}>Obesidade II (severa)</Text>
    if(props.IMC>=40) return <Text style={{fontSize:32, fontWeight: 'bold', fontColor: 'red'}}>Obesidade III (mórbida)</Text>
}

export default IMCMsg