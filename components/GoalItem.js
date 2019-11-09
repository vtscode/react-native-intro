import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/* 
    Touchable : utk parent saja, props utk parent
    TouchableOpacity : utk mengatur opacity di dlm high level komponen
    TouchableHighlight : ketika di klik nanti ada background hitam, bisa di ubah dengan kata kunci underlayColor e.g. '#ccc' atau blue
    TouchableNativeFeedback : utk touchable dengan android saja
    TouchableWithoutFeedback : utk tidak ada feedback visual 
*/ 
const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete} activeOpacity={0.7} >
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10, backgroundColor: '#ccc', borderColor: 'black', borderWidth: 1, padding: 10
    }
});

export default GoalItem;