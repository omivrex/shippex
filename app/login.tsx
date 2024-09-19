import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors.constants";
import { router } from "expo-router";
import { TextInput } from "react-native-paper";
import { LargeButton } from "../components/buttons.component";
import { CustomTextInput } from "../components/inputs.component";
import { useState } from "react";

function Login() {
    const [url, setUrl] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <View style={styles.container}>
            <Pressable onPress={router.back} style={{ flexDirection: "row", gap: 2.5, alignItems: "center" }}>
                <AntDesign name="left" size={24} color={colors.blue1} />
                <Text style={styles.navButnText}>Cancel</Text>
            </Pressable>
            <View style={styles.body}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.description}>Please enter your First, Last name and your phone number in order to register</Text>
                <View style={styles.inputContainer}>
                    <CustomTextInput
                        onChange={(value) => setUrl(value)}
                        textColor={colors.primary}
                        left={<Text style={{ color: "#58536E", fontSize: hp("1.5%") }}>https://</Text>}
                        label="URL"
                    />
                    <CustomTextInput
                        keyboardType="email-address"
                        onChange={(value) => setUsername(value)}
                        textColor={colors.primary}
                        label="Username / Email"
                    />
                    <CustomTextInput onChange={(value) => setPassword(value)} textColor={colors.primary} label="Password" secureTextEntry />
                </View>

                <LargeButton
                    isDisabled={!(url && username && password)}
                    textStyles={{ color: colors.background }}
                    styles={{ width: "100%", backgroundColor: colors.primary }}
                    onPress={() => router.push("login")}
                    text="Login"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: hp("100%"),
        width: wp("100%"),
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingHorizontal: "0.5%",
        paddingVertical: "5%",
        backgroundColor: colors.background,
    },

    navButnText: {
        color: colors.blue1,
        fontSize: 17,
        letterSpacing: 0,
        lineHeight: 22,
        fontFamily: "SF Pro",
    },

    body: {
        height: "97%",
        width: "100%",
        paddingHorizontal: "7%",
        paddingVertical: "5%",
        justifyContent: "space-between",
    },

    title: {
        fontSize: 34,
        lineHeight: 41,
        fontWeight: "600",
        fontFamily: "SF Pro",
        color: "#000",
        marginVertical: "3%",
    },

    description: {
        fontSize: 17,
        letterSpacing: 0,
        lineHeight: 24,
        fontFamily: "SF Pro Text",
        color: colors.textColor1,
        alignItems: "center",
    },

    inputContainer: {
        marginTop: "10%",
        width: "100%",
        justifyContent: "flex-start",
        gap: 30,
        flex: 1,
    },
});

export default Login;
