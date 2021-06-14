import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const Task = (props) => {
  return(
    <View style={styles.Items}>
      <View style={styles.ItemsLeft}>
        <View style={styles.Square}></View>
        <Text style={styles.ItemsText}>
          {props.text}
        </Text>
      </View>
      <View style={styles.Cirular}></View>
    </View>
  )
}

const styles= StyleSheet.create({
  Items:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:20
  },
  ItemsLeft:{
    flexDirection:'row',
    alignItems:"center",
    flexWrap:"wrap"
  },
  Square:{
    width:24,
    height:24,
    backgroundColor:'#55BcF6',
    opacity:0.4,
    borderRadius:5,
    marginRight:15
  },
  ItemsText:{
    maxWidth:'80%'
  },
  Cirular:{
    width:12,
    height:12,
    borderColor:'#55BCF6',
    borderWidth:2,
    borderRadius:5
  },
}); 

export default Task;
