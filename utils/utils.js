let { token } = Cookies.get()
const jwt = require("jsonwebtoken")

const getUserData = () => {
    const decodeToken = token ? jwt.decode(token) : undefined;
    return decodeToken
};

export const removeCookies = (key) => {
    Cookies.remove(key);
}

export const isAdmin = () => {
    let decodeToken = getUserData();
    return decodeToken.role == "ADMIN";
}

export const isSuperAdmin = () => {
    let decodeToken = getUserData();
    return decodeToken.role == "SUPERADMIN";
}

export const isActiveAccount = () => {
    let decodeToken = getUserData();
    return decodeToken.isActive;
}

export default getUserData;