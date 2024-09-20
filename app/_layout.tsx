import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function RootLayout() {
    return (
        <RootSiblingParent>
            <QueryClientProvider client={queryClient}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                    <Stack.Screen name="(main)" />
                    <Stack.Screen
                        options={{
                            presentation: "modal",
                        }}
                        name="login"
                    />
                </Stack>
            </QueryClientProvider>
        </RootSiblingParent>
    );
}

export default RootLayout;
