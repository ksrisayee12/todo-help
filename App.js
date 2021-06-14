import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task, setTask] = React.useState();
  const [taskItems, setTaskItems] = React.useState([]);

  const HandleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.Container}>
     
     {/*Today's Task*/}
     <View style={styles.TaskWrapper}>
     <Text style={styles.SectionTitle}>Today's Tasks</Text>
     <View style={styles.Item}>
      {/*This is where the task's will go!*/}
      {
        taskItems.map((item, index) => {
         return (
           <TouchableOpacity key={index} onPress={() => completeTask(index)}>
             <Task  text={item}/>
           </TouchableOpacity>
         )
        })
      }
      {/* <Task text ={ 'Task 1'}/>
      <Task text ={ 'Task 2'}/> */}
     </View>
     </View>

    <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     style={styles.WriteTaskWrapper}
     >
       <TextInput style={styles.Input} placeholder={'Write A Task'} value={task} onChangeText={text => setTask(text)} />

      <TouchableOpacity onPress={() => HandleAddTask()}>
        <View style={styles.AddWrapper}>
          <Text style={styles.AddText}>+</Text>
        </View>
      </TouchableOpacity>

     </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#b3d9ff',
  },
  TaskWrapper: {
    paddingTop:70,
    paddingHorizontal:20,
  },
  SectionTitle: {
    fontSize:24,
    fontWeight:"bold",
  },
  Item: {
    marginTop:30
  },
  WriteTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:"center",
  },
  Input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:2,
    width:250
  },
  AddWrapper:{
    width:60,
    height:60,
    backgroundColor: '#cccccc',
    borderRadius:60,
    justifyContent:'center',
    alignItems:"center",
    borderColor:'#808080',
    borderWidth:3,
  },
  AddText:{
    fontSize:17,
    fontWeight:'bold'
  },
});
