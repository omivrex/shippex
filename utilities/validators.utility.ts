export const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
};

export const isValidUrl = (url: string): boolean => {
    const urlPattern = /^(https:\/\/www\.|https:\/\/|www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,}([\/a-zA-Z0-9#?&=_-]*)?$/;
    return urlPattern.test(url);
};
