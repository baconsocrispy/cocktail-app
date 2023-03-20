// external imports
import { FC, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// context
import { UserContext } from "@/contexts/user.context";

// types
export type UserFormData = {
  user: {
    email: string;
    password: string;
    password_confirmation?: string; 
  }
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
  // state
  const { signUp, signIn, getUser } = useContext(UserContext);

  // useForm elements
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserFormData>()

  // handlers
  const onSignUp: SubmitHandler<UserFormData> = (formData: UserFormData) => {
    signUp(formData);
    getUser();
  }

  const onSignIn: SubmitHandler<UserFormData> = (formData: UserFormData) => {
    signIn(formData);
    getUser();
  }

  return (
    <div>
      <form id='user' onSubmit={ formType === FORM_TYPES.signUp ? 
        handleSubmit(onSignUp) : 
        handleSubmit(onSignIn)
      }>
        
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          { ...register('user.email', { required: 'Email is required' })}
          autoComplete="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          { ...register('user.password', { required: 'Password is required' })}
          autoComplete="current-password"
        />

        { formType === FORM_TYPES.signUp && 
          <>
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
              type="password"
              { ...register('user.password_confirmation', 
                { required: 'Password confirmation required' })
              }
              autoComplete="new-password"
            />
          </>
        }

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AuthForm