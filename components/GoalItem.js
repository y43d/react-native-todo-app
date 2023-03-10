import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.goalItemView}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    goalItemView: {
        padding: 8,
        borderRadius: 6,
        backgroundColor: "darkblue",
        margin: 6,
    },
    goalText: {
        color: "white",
    },
});
