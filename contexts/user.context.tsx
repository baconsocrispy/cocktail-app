// external imports
import { createContext, ReactNode, useState } from "react";

// api
import { logInUser, logOutUser, signUpUser } from "@/pages/api/auth/auth-api";

// types
import { Ingredient } from "./ingredients.context";
import { Tool } from "./recipes.context";
import { UserFormData } from "@/components/auth-form/auth-form.component";

export type Cabinet = {
  id: number;
  name: string;
  private: boolean;
  ingredients: Ingredient[];
  tools: Tool[];
}

export type User = {
  id: number | null;
  cabinets: Cabinet[];
  default_cabinet_id: number;
  email: string | null;
}

type UserContextProps = {
  jwt: string | null;
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
  jwt: null,
  user: null,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {}
})

// provider
export const UserProvider = ({ children }: UserProviderProps) => {
  // initial state
  const [ user, setUser ] = useState<User | null>(null);
  const [ jwt, setJWT ] = useState<string | null>(null);

  // actions
  const signUp = async (formData: UserFormData) => {
    const { user, jwt } = await signUpUser(formData);

    setJWT(jwt);
    setUser(user);
  }

  const signIn = async (formData: UserFormData) => {
    const { user, jwt } = await logInUser(formData);

    setJWT(jwt);
    setUser(user);
  }
  
  const signOut = async () => {
    await logOutUser();
    setJWT(null);
    setUser(null);
  }

  // export data
  const value = { 
    jwt,
    user,
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