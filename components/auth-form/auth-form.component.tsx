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
  const { signUp, signIn } = useContext(UserContext);

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
    reset();
  }

  const onSignIn: SubmitHandler<UserFormData> = (formData: UserFormData) => {
    signIn(formData);
    reset();
  }

  return (
    <div className="auth-form">
      <form 
        id='user'
        className="auth-form__form" 
        onSubmit={ formType === FORM_TYPES.signUp ? 
          handleSubmit(onSignUp) : 
          handleSubmit(onSignIn)
      }>
        {/* <div className="auth-form__element"> */}
          <label 
            htmlFor="email"
            className="auth-form__label"
          >
            Email
          </label>
          <input 
            type="email"
            className="auth-form__input"
            { ...register('user.email', { required: 'Email is required' })}
            autoComplete="email"
          />
        {/* </div> */}
   
        {/* <div className="auth-form__element"> */}
          <label 
            htmlFor="password"
            className="auth-form__label"
          >
            Password
          </label>
          <input
            type="password"
            className="auth-form__input"
            { ...register('user.password', { required: 'Password is required' })}
            autoComplete="current-password"
          />
        {/* </div> */}

        { formType === FORM_TYPES.signUp && 
          // <div className="auth-form__element">
          <>
            <label 
              htmlFor="password_confirmation"
              className="auth-form__label"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="auth-form__input"
              { ...register('user.password_confirmation', 
                { required: 'Password confirmation required' })
              }
              autoComplete="new-password"
            />
          </>
          // </div>
        }

        <button className="auth-form__button util-default-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AuthForm