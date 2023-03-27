// library imports
import { useState } from "react";

// components
import ControlBar from "@/layout/controlbar/controlbar.component";
import AuthForm from "@/components/auth-form/auth-form.component";

// data
import { FORM_TYPES } from "@/components/auth-form/auth-form.component";
import Logo from "@/components/logo/logo.component";

const Auth = () => {
  // state
  const [ activeForm, setActiveForm ] = useState(FORM_TYPES.signIn)

  // handlers
  const changeForm = () => {
    activeForm === FORM_TYPES.signUp ? 
      setActiveForm(FORM_TYPES.signIn) :
      setActiveForm(FORM_TYPES.signUp)
  }

  return (
    <>
      <ControlBar>Control Bar</ControlBar>

      <div className="auth-page__content">

        <h4 className="auth-page__header">
          { activeForm === FORM_TYPES.signIn ? 
              'Sign in below:' : 'Sign up below:'    
          }
        </h4>

        <AuthForm formType={ activeForm } />

        <div className="auth-page__form-switch">
          <p className="auth-page__text">
            { activeForm === FORM_TYPES.signIn ? 
                'Don\'t have an account?' :
                'Already have an account?'
            }
          </p>
          <button 
              onClick={ changeForm }
              className="auth-page__button util-default-button"
            >
              { activeForm === FORM_TYPES.signIn ? 
                  FORM_TYPES.signUp : FORM_TYPES.signIn 
              }
            </button>
        </div>
         
      </div>
    </>
  )
}

export default Auth