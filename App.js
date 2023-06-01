import React from "react"
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';
import CurrentWeather from "./src/component/CurrentWeather";

const App = () =>{
return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>

)
  

}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  wrapper:{
    flex: 1,
    backgroundColor: 'pink', 
  },

  temp:{
    color: 'black',
    fontSize: 48
  },

  feels:{
    color: 'black',
    fontSize: 30
  },

  highlowwrapper:{
    flexDirection: 'row'
  },

  highlow:{
    color: 'black',
    fontSize: 20
  },

  bodywrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },

  description:{
    color: 'black',
    fontSize: 48
  },

  message:{
    color: 'black',
    fontSize: 30
  },
})

export default App