import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const user = null;
  const authenticationInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authenticationInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
