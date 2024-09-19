import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors.constants";

function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <AntDesign name="left" size={24} color="black" />
                <Text></Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
    },
});

export default Login;
