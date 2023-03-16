// types
import { UserFormData } from "@/components/auth-form/auth-form.component"
type CSRFToken = {
  token: string;
}

// api POST/DELETE calls
export const signUpUser = async (formData: UserFormData) => {
  const response = await backendRequest(
    'POST', 'http://localhost:3001/users/', formData
  );
  console.log(response)
  return response
}

export const logInUser = async (formData: UserFormData) => {
  const response = await backendRequest(
    'POST', 'http://localhost:3001/users/sign_in', formData
  );
  console.log(response)
  return response
}

export const logOutUser = async () => {
  const response = await backendRequest(
    'DELETE', 'http://localhost:3001/users/sign_out'
  );
  console.log(response)
  return response
}

// helpers
const CSRFToken = async () => {
  const response = await fetch('http://localhost:3001/csrf_token')
  const { token }: CSRFToken = await response.json();
  return token;
}

const backendRequest = async (
  method: string,
  url: string,
  data: UserFormData | null = null
) => {

  const csrfToken = await CSRFToken();

  if (csrfToken) {
    const response = await fetch(url, {
      method: method,
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response.json();
  }
}