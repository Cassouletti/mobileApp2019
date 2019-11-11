import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';


import image1 from '../image/forest.jpeg';

const {width: WIDTH} = Dimensions.get('window');



class Login extends React.Component {
    constructor() {
      super()
      this.state = {
        trueornot: true,
        press: false
      }
    }
  
    trueornot= () => {
      if(this.state.press == false) {
        this.setState({trueornot: false, press: true})
      } else {
        this.setState({trueornot: true, press: false})
      }
    }
  
    static navigationOptions = {
      title: 'Login', 
    };
  
    render() {
      return (
        <ImageBackground source={image1} style={styles.backgroundcontainer}>
          <View>
            <Text style={styles.textcss}>login</Text>
          </View>
    
          <View>
            <TextInput
            style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
            />
          </View>
  
          <View style={styles.saut}>
            <TextInput
            style={styles.input2}
              placeholder={'Password'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              secureTextEntry={this.state.trueornot}
            />
          </View>

          <TouchableOpacity style={styles.loginconatainer}
          onPress={() => this.props.navigation.navigate('ListScreen')} title ="Submit">
            <Text style={styles.normaltext}>submit</Text>
            </TouchableOpacity>
  
        </ImageBackground>
      )
    }
  }
  
  
  const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textcss: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'didot',
    marginTop: 80
  
  },
  input: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255,0.6)',
    color: 'rgba(0,0,0,1)',
    marginHorizontal: 25,
    marginTop: 170,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
  
  },
  input2: {
    width: WIDTH -55,
    height: 45,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255,0.6)',
    color: 'rgba(0,0,0,1)',
    marginHorizontal: 25,
    marginTop: 20
  },
  loginconatainer: {
    width: WIDTH -310,
    height: 36,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255,0.6)',
    color: 'rgba(0,0,0,0.7)',
    marginHorizontal: 25,
    marginBottom: 20,

  },
  normaltext: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 2
  },
  saut: {
    paddingBottom: 30
  }
  });
  
  
  export default Login;
  