import { StyleSheet, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useState } from "react";



import GoalItem from "./components/GoalItem";
import GoalInputs from "./components/GoalInputs";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        setModalVisible(false);
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    };

    const startAddGoalHandler = () => {
        setModalVisible(true);
    };

    const endAddGoalHandler = () => {
        setModalVisible(false);
    };

    return (
        <>

        <StatusBar style="light" />
        <View style={styles.appContainer}>
        
            <Button
                onPress={startAddGoalHandler}
                title="Add New Goal !"
                color="#5e0acc"
            ></Button>

            {modalVisible && (
                <GoalInputs
                    onAddGoal={addGoalHandler}
                    visible={modalVisible}
                    onCancel={endAddGoalHandler}
                />
            )}
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                id={itemData.item.id}
                                onDeleteItem={deleteGoalHandler}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor : "#1e085a",

    },
    goalsContainer : {
        flex : 5,
    }
});
