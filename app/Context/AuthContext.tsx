"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthTypes {
    idUser: number | null,
    login: (id: number, token: string) => void,
    logout: () => void,
    isLogged: boolean | null
};

const AuthContext = createContext<AuthTypes>({
    idUser: null,
    login: () => {},
    logout: () => {},
    isLogged: null
});

export default function AuthProvider( { children } : { children: ReactNode}){
    const [idUser, setIdUser] = useState<number | null>(null);
    const [isLogged, setIsLogged] = useState<boolean | null>(null);

    // Verifica se há token no localStorage
    useEffect(() => {
        const tokenSaved = localStorage.getItem("token");
        if(tokenSaved){
            // Aqui, se existir, vai descriptar o token e adicionar.
            // const decode = jwtDecode(tokenSaved);
            // Colocar uma condição para o toke ser reconhecido
            // Se o token for reconhecido, coloca o usuário nele
            // login(decode.id, tokenSaved)
            setTimeout(() => {
                setIsLogged(true);
            }, 10000);
            // Caso não, vai mandar para a página de login por meio do setIsLogged(false);
            // setIsLogged(false);
        } else{
            // Caso não exista nenhum token no localStorage (ou seja, ele não logou anteriormente), vai mandar para a página de login por meio do setIsLogged(false);
            setTimeout(() => {
                setIsLogged(false);
            }, 10000);
        }
    }, []);

    const login = (id : number, token: string) => {
        setIdUser(id);
        setIsLogged(true);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setIdUser(null);
        localStorage.removeItem("token");
        setIsLogged(false);
    };

    return (
        <AuthContext.Provider value = {{ idUser, login, logout, isLogged }}>
            {children}
        </AuthContext.Provider>
    )
};


export function useAuth(){
    return useContext(AuthContext);
};