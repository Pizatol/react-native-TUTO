import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

export default function GoalInputs(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (e) => {
        setEnteredGoalText(e);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/goal.png')}/>
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder="Your course goal !"
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    
                    <View style={styles.button}>
                        <Button title="Cancel" color="#f31282" onPress={props.onCancel}  />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" color="#5e0acc" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",       
        padding: 15,    
        backgroundColor : "#311b6b"
    },
    image : {
        width : 100,
        height : 100,
        margin : 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius : 6,
        backgroundColor : '#e4d0ff',
        color : "#120438",
        width: "90%",
        padding: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 15,
    },
    button: {
        width: "35%",
        marginHorizontal: 8,
    },
});
