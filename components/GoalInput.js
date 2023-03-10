import {
    StyleSheet,
    TextInput,
    Button,
    View,
    Modal,
    Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/img/goal.png")}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                            color="#f31282"
                            title="Cancel"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                            color="#b180f0"
                        ></Button>
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
        padding: 16,
        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        borderRadius: 6,
        width: "100%",
        padding: 16,
        color: "#120438",
    },
});
