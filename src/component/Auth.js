import {useState, createContext, useContext} from 'react';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const  [item,setItem] = useState('');
    const login = item =>{
        console.log(item);
        setItem(item)
    }
    const logout = () =>{
        setItem(null);
    }
  return (
   <AuthContext.Provider value={{item,login,logout}}>
    {children}
   </AuthContext.Provider>
  )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}
export default AuthProvider;
