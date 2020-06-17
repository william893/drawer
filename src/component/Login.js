import React, {Component} from 'react'
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/styles'
import Cadastrar from './Cadastrar'


export default class Login extends Component{
    
    state = {
        username : '',
        passaword :  '',
    }
 
    clicou = () => {

        var username = this. state.username
        var passaword = this.state.passaword

        if (username === 'abc' && passaword === '123'){
          
            alert("Usuário validado com Sucesso")
        }
        else{

            alert("Digite User: abc Pass: 123")
            alert("Usuário ou Senha Inválido!")
        }
     
    }
    
    clicouGoogle = () => {
        alert("Clicou no Google!")
    }

    clicouCadastrar () {
        alert("Clicou no Cadastre-se!")
    }

    clicouEsqueciSenha () {
      alert("Clicou no esqueci a Senha!")
  }
    
  
    render(){

    return (
        <View style={styles.container}>
        <Image
          source={require('../images/logo.jpg')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite seu Email'
          onChangeText =  { (username)  => this.setState  ({username})} 
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Digite sua Senha'
          onChangeText =  { (passaword)  => this.setState  ({passaword})}
          
        />
        <TouchableOpacity 
          style={styles.buttomLogin}
          onPress={ () => {this.clicou()}}
        >
          <Text style={styles.buttomText}>Login</Text>
        
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttomLogin}
          onPress={ () => {this.clicouGoogle()}}
        >
          <Text style={styles.buttomText}>Entrar com Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={ () => {this.clicouCadastrar()}}
        >
          <Text style={styles.cadastrar}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => {this.clicouEsqueciSenha()}}
        >
          <Text style={styles.cadastrar}>Esqueci minha Senha</Text>
        </TouchableOpacity>


      </View>

    )
  }

}