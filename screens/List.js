import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  map,
  Let,
  Animated
} from 'react-native';

import image2 from '../image/background3.jpg';

const {width: WIDTH} = Dimensions.get('window');

  export default class List extends Component {

    
    constructor(props){
      super(props);
      this.state ={ isLoading: true,
      dataSource:null};
    }

    componentDidMount(){
      return fetch('https://raw.githubusercontent.com/Cassouletti/api/master/killing.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.results
          })
        })
        .catch((error) =>{
          console.error(error);
        });
    }



    render() {
        

      if(this.state.isLoading) {
        return(
          <View>
            <ActivityIndicator />
        </View>
        )
      } else {
          let results = this.state.dataSource.map((val, key) => {
            return <ScrollView>
                        <View key={key} >
                            <View style={styles.box}>
                                <Text style={styles.killersname} > {val.name} </Text>
                                <View style={styles.middle}>
                                    <Text style={styles.nickname}>Nickname:{'\n'} {val.Nickname} </Text>
                                </View>
                                <View style={styles.viewimage} >
                                    <Image source={{uri: val.picture}} style={styles.imagekilling} />
                                </View>
                                <View style={styles.middle} >
                                    <Text style={styles.number} >{val.killing} Number of Killings</Text>
                                </View>
                                <Text style={styles.modus}> {val.modus} </Text>
                                </View>
                            </View>
                        <View style={styles.box2}>

                        </View>
                    </ScrollView>


          });

      return (
          
              <ScrollView scrollEventThrottle={16}>
        <View>
            <View style={styles.viewitile}>
                <Text style={styles.titlekilling} >The Most Dangerous Serial Killers</Text>
            </View >
            {results}
        </View>
        </ScrollView>
      );
    }
      
    }
  }

  const styles = StyleSheet.create({
    imagekilling: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderColor: '#000000',
        borderWidth: 8,
        borderRadius: 5
    },
    viewimage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlekilling: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'arial',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontStyle: 'italic'

    },
    viewitile: {
        backgroundColor: '#000000',
        marginBottom: 10,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 15
    },
    killersname: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10
    },
    number: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 10,
        marginTop: 6,
        backgroundColor:'rgba(240, 0, 0 ,0.8)',
        color:'white',
        width: WIDTH -212,
        borderWidth: 3.5,
        borderColor: 'black',
        paddingTop:6
    },
    middle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundcontainer: {
        flex:1,
        resizeMode: 'stretch',
      },
    paragraph: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        alignContent: 'stretch',
        flexWrap: 'nowrap',
        backgroundColor:'rgba(237, 237, 237 ,0.7)',
        fontSize:16,
        marginLeft:6,
        marginRight: 6
    },
    box: {
        backgroundColor: 'rgba(235, 235, 235 ,0.7)',
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 15,

    elevation: 5,
    paddingBottom: 10,
    paddingTop: 10
    },
    box2: {
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop:10,
        
    },
    nickname: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
        marginTop: 6,
        backgroundColor:'rgba(240, 0, 0 ,0.8)',
        width: WIDTH -212,
        borderWidth: 3.5,
        borderColor: 'black',
        paddingTop:6,
        color: 'white'
    },
    modus: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 17,
        paddingLeft:13,
        paddingRight: 13
    }
    });