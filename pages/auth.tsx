// external imports
import { useState } from "react";

// components
import ControlBar from "@/layout/controlbar/controlbar.component";

// data
import AuthForm, { FORM_TYPES } from "@/components/auth-form/auth-form.component";

const Auth = () => {
  // state
  const [ activeForm, setActiveForm ] = useState(FORM_TYPES.signIn)

  const changeForm = () => {
    activeForm === FORM_TYPES.signUp ? 
      setActiveForm(FORM_TYPES.signIn) :
      setActiveForm(FORM_TYPES.signUp)
  }

  return (
    <>
      <ControlBar>Control Bar</ControlBar>
      <div>
        <AuthForm formType={ activeForm } />
        <button onClick={ changeForm }>
          { activeForm === FORM_TYPES.signIn ? 
              FORM_TYPES.signUp : FORM_TYPES.signIn 
          }
        </button>
      </div>
    </>
   
  )
}

export default Auth