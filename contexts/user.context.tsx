// external imports
import { createContext, ReactNode, useState, useEffect } from "react";

// api
import { logInUser, logOutUser, signUpUser } from "@/pages/api/auth/auth-api";

// types
import { Ingredient } from "./ingredients.context";
import { Tool } from "./tools.context";
import { UserFormData } from "@/components/auth-form/auth-form.component";
import { getCurrentUser } from "@/pages/api/cocktail-api";

export type Cabinet = {
  id: number;
  name: string;
  private: boolean;
  ingredients: Ingredient[];
  tools: Tool[];
}

export type User = {
  id: number;
  cabinets: Cabinet[];
  current_cabinet_id: number | null;
  email: string | null;
}

type UserContextProps = {
  jwt: string | null;
  user: User | null;
  getUser: Function;
  signUp: Function;
  signIn: Function;
  signOut: Function;
}

type UserProviderProps = {
  children: ReactNode;
}

// context
export const UserContext = createContext<UserContextProps>({
  jwt: null,
  user: null,
  getUser: () => {},
  signUp: () => {},
  signIn: () => {},
  signOut: () => {}
})

// provider
export const UserProvider = ({ children }: UserProviderProps) => {
  // initial state
  const [ user, setUser ] = useState<User | null>(null);
  const [ jwt, setJWT ] = useState<string | null>(null);

  // set user when jwt updates
  useEffect(() => {
    jwt && getUser();
  }, [ jwt ])

  // actions
  const signUp = async (formData: UserFormData) => {
    const { jwt } = await signUpUser(formData);
    setJWT(jwt);
  }

  const signIn = async (formData: UserFormData) => {
    const { jwt } = await logInUser(formData);
    setJWT(jwt);
  }
  
  const signOut = async () => {
    await logOutUser();
    setJWT(null);
    setUser(null);
  }

  const getUser = async () => {
    if (jwt) {
      const currentUser: User = await getCurrentUser(jwt)
      setUser(currentUser)
    }
  }
    

  // export data
  const value = { 
    jwt,
    user,
    getUser,
    signUp, 
    signIn, 
    signOut
  };

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  )
} 