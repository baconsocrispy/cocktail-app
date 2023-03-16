// external imports
import { UserFormData } from "@/components/auth-form/auth-form.component";
import { createContext, ReactNode, useState } from "react";

// api
import { logInUser, logOutUser, signUpUser } from "@/pages/api/auth-api";

// types
export type User = {
  id: number | null;
  email: string | null;
}

type UserContextProps = {
  user: User | null;
}

type UserProviderProps = {
  children: ReactNode;
}

// context
export const UserContext = createContext<UserContextProps>({
  user: null
})

// provider
export const UserProvider = ({ children }: UserProviderProps) => {
  // initial state
  const [ user, setUser ] = useState(null);

  // actions
  const signUp = async (formData: UserFormData) => {
    const response = await signUpUser(formData);
    const currentUser = await response.json();
    setUser(currentUser)
  }

  const signIn = async (formData: UserFormData) => {
    const response = await logInUser(formData);
    const currentUser = await response.json();
    setUser(currentUser);
  }
  
  const signOut = () => async () => {
    await logOutUser();
    setUser(null)
  }

  // export data
  const value = { user, signUp, signIn, signOut };

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  )
} 