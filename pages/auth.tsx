// external imports
import { useState } from "react";

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
    <div>
      <AuthForm formType={ activeForm } />
      <button onClick={ changeForm }>
        { activeForm === FORM_TYPES.signIn ? 
            FORM_TYPES.signUp : FORM_TYPES.signIn 
        }
      </button>
    </div>
  )
}

export default Auth