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
  signUp: Function;
  signIn: Function;
  signOut: Function;
}

type UserProviderProps = {
  children: ReactNode;
}

// context
export const UserContext = createContext<UserContextProps>({
  user: null,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {}
})

// provider
export const UserProvider = ({ children }: UserProviderProps) => {
  // initial state
  const [ user, setUser ] = useState(null);

  // actions
  const signUp = async (formData: UserFormData) => {
    const currentUser = await signUpUser(formData);
    setUser(currentUser)
  }

  const signIn = async (formData: UserFormData) => {
    const currentUser = await logInUser(formData);
    setUser(currentUser);
  }
  
  const signOut = async () => {
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