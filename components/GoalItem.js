import { StyleSheet, Text, View, Pressable } from 'react-native'

export default function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
        <Pressable android_ripple={{color : "#210644"}} 
        onPress={props.onDeleteItem.bind(this, props.id )}
        style={({pressed}) => pressed & styles.pressedItem }
        >
            <Text style={styles.goalText} >{props.text}</Text>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({ 
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',	
		
  },
  pressedItem : {
    color : '#333'
  },
  goalText: {
		color: "white",
        margin: 8,
        padding: 8,
       
  },
})

