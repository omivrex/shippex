import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../constants/colors.constants";
import { LargeButton } from "../components/buttons.component";
const startupAnimation = require("../assets/spash-anim.json");

export default function App() {
    const [showLoginFrame, setshowLoginFrame] = useState<boolean>(false);
    return (
        <SafeAreaView>
            <LottieView
                style={{ height: hp("100%"), width: wp("100%"), position: "absolute" }}
                source={startupAnimation}
                autoPlay
                loop={false}
                resizeMode="cover"
                onAnimationFinish={() => setshowLoginFrame(true)}
            />
            {showLoginFrame && (
                <View
                    style={{
                        height: hp("100%"),
                        width: wp("100%"),
                        position: "absolute",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingVertical: "10%",
                    }}
                >
                    <View />
                    <Image source={require("../assets/images/brand_name.png")} />
                    <LargeButton onPress={() => router.push("login")} text="Login" />
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
