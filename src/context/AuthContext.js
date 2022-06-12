import * as React from "react";
import { Alert } from "react-native";

export const AuthContext = React.createContext()

export function useAuth() {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}


export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = React.useState(undefined);
    const [loading, setLoading] = React.useState();

    const signIn = async (_username, _password) => {

        setAuthData({ user: _username, password: _password })
         
    }

    const signOut = async () => {
        setAuthData(undefined);
         
    }

    return (
        <AuthContext.Provider value={{ authData, setAuthData, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}


