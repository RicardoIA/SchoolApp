import React, { createContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  function signIn(user, password) {
    if (user !== 'ricardo' && password !== '123') {
      setUser({
        email: user,
        status: "ativo",
      });

      navigation.navigate("Main");
    }
  }
  return (
    <AuthContext.Provider value={{ name: "Ricardo Amorim", signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
