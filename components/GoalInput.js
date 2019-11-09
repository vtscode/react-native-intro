import React,{useState} from 'react';
import { View, TextInput,Button, StyleSheet,Modal } from 'react-native';

const GoalInput = props => {
    const [textEntered,setTextEntered] = useState('');

    const userInputHandler = enteredText => {
        setTextEntered(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(textEntered);
        setTextEntered('')
    }

    return (
        <Modal visible={props.onVisible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput placeholder="Input the text here..."
                style={styles.input} 
                onChangeText={userInputHandler} 
                value={textEntered} 
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: { 
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    input: { 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10, 
        width: '80%',
        marginBottom:10 
    },
    buttonContainer:{
        flexDirection:'row',
        width: '60%',
        justifyContent:'space-between'
    },
    button:{
        width:'40%'
    }
});

export default GoalInput;
