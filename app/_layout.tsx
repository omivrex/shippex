import { Stack } from "expo-router";

function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen
                options={{
                    presentation: "modal",
                }}
                name="login"
            />
        </Stack>
    );
}

export default RootLayout;
