import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([])
  
  const [isAddMode, setIsAddMode] = useState(false)

  const addUserInputHandler = goalTitle =>{
    if(goalTitle.length === 0){
      return;
    }
    setCourseGoals(currentGoals => 
      [
        ...courseGoals,{
          id:Math.random().toString(),
          value:goalTitle
        }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals => 
      {
        return currentGoals.filter(goal => goal.id !== goalId)
      })
  }
  
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onVisible={isAddMode} onAddGoal={addUserInputHandler} onCancel={cancelGoalAdditionHandler} />
      <View>
        <FlatList
          keyExtractor={(item,index) => item.id} 
          data={courseGoals} 
          renderItem={itemData => (
          <GoalItem title={itemData.item.value} onDelete={removeGoalHandler.bind(this,itemData.item.id)} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 }
});
