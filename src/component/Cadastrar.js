import React, {Component} from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/styles'


export default class Cadastrar extends Component{    
    
    render(){

        return (
            <View style={styles.container}>
                <Image
                    source={require('../images/logo.jpg')}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                />
            </View>
        )
    }

}