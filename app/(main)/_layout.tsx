import { Tabs } from "expo-router";

export default function mainNav() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="Shipments" />
            <Tabs.Screen name="Scan" />
            <Tabs.Screen name="Wallet" />
            <Tabs.Screen name="Profile" />
        </Tabs>
    );
}
