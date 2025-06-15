"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


interface AuthTypes {
    idUser: number | null;
    typeUser: boolean;
    login: (id: number, type: boolean,token: string) => void;
    logout: () => void;
    isLogged: boolean | null;
}

interface TokenPayload {
    user_id: number;
    user_type: boolean;
    exp: number; 
}

const AuthContext = createContext<AuthTypes>({
    idUser: null,
    typeUser: false,
    login: () => {},
    logout: () => {},
    isLogged: null
});

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [idUser, setIdUser] = useState<number | null>(null);
    const [typeUser, setTypeUser] = useState<boolean>(false);
    const [isLogged, setIsLogged] = useState<boolean | null>(null);

    useEffect(() => {
        const tokenSaved = localStorage.getItem("token");
        if (tokenSaved) {
            try {
                const decoded: TokenPayload = jwtDecode(tokenSaved);
                // Ex: validar se token expirou (opcional)
                if (decoded.exp * 1000 < Date.now()) {
                    throw new Error("Token expirado");
                }
                // setIdUser(decoded.user_id);
                // setIsLogged(true);
                login(decoded.user_id, decoded.user_type, tokenSaved);
            } catch {
                localStorage.removeItem("token");
                setIsLogged(false);
            }
        } else {
            setIsLogged(false);
        }
    }, []);

    const login = (id: number, type: boolean, token: string) => {
        setIdUser(id);
        setTypeUser(type);
        setIsLogged(true);
        localStorage.setItem("token", token);
    };

    const logout = () => {
        setIdUser(null);
        setTypeUser(false);
        localStorage.removeItem("token");
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider value={{ idUser, typeUser, login, logout, isLogged }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}