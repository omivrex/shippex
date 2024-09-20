import * as SecureStore from "expo-secure-store";
import { AuthData } from "../types/auth.types";

export const cacheAuthData = async (data: AuthData) => {
    try {
        const jsonData = JSON.stringify(data);
        await SecureStore.setItemAsync("auth-data", jsonData);
    } catch (error) {
        throw error;
    }
};

export const deleteCachedAuthData = async () => {
    try {
        await SecureStore.deleteItemAsync("auth-data");
    } catch (error) {
        throw error;
    }
};

export const getCachedAuthData = async (): Promise<AuthData | undefined> => {
    try {
        const authData = await SecureStore.getItemAsync("auth-data");
        if (authData) {
            return JSON.parse(authData);
        }
    } catch (error: any) {
        throw new Error(error.message, { cause: "auth-error" });
    }
};
