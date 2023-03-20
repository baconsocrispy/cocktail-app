// external imports
import { useState } from "react";

// components
import Toolbar from "@/components/toolbar/toolbar.component";

// data
import AuthForm, { FORM_TYPES } from "@/components/auth-form/auth-form.component";

const Auth = () => {
  // state
  const [ activeForm, setActiveForm ] = useState(FORM_TYPES.signUp)

  const changeForm = () => {
    activeForm === FORM_TYPES.signUp ? 
      setActiveForm(FORM_TYPES.signIn) :
      setActiveForm(FORM_TYPES.signUp)
  }

  return (
    <div>
      <AuthForm formType={ activeForm } />
      <button onClick={ changeForm }>{ activeForm }</button>
    </div>
  )
}

export default Auth