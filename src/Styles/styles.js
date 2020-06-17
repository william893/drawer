import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B0C4DE'
  },
  logo: {
    width: 300,
    height: 150,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3

  },
  buttomLogin: {
    width: 300,
    height: 42,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttomText:{
    fontSize: 16,
    fontWeight: 'bold'

  },
  cadastrar:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: "blue",
    textDecorationLine: 'underline'

  }

})

export default styles
