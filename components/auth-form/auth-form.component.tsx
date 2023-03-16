// external imports
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// api
import { logInUser, logOutUser, signUpUser } from "@/pages/api/auth-api";

// types
export type UserFormData = {
  email: string;
  password: string;
  confirmPassword?: string; 
}
type AuthFormProps = {
  formType: string;
}

// data
export enum FORM_TYPES {
  signUp = 'Sign Up',
  signIn = 'Sign In'
}

const AuthForm: FC<AuthFormProps> = ({ formType }) => {
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm