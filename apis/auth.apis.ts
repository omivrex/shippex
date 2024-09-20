import { AuthData } from "../types/auth.types";
import { cacheAuthData } from "../utilities/cache.utility";
import { isValidEmail, isValidUrl } from "../utilities/validators.utility";
import { client } from "./axios.config";

export const login = async (url: string, email: string, password: string): Promise<AuthData> => {
    try {
        if (!isValidEmail(email)) {
            throw new Error("Invalid email");
        }
        if (!password) {
            throw new Error("Input your password");
        }
        if (!isValidUrl(url)) {
            throw new Error("Invalid url");
        } else {
            const data = new FormData();
            data.append("usr", email);
            data.append("pwd", password);

            const res: AuthData = await client.post("/login", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            await cacheAuthData(res);
            return res;
        }
    } catch (error) {
        throw error;
    }
};
