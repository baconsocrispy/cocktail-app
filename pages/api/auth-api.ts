// types
import { UserFormData } from "@/components/auth-form/auth-form.component"

export const signUpUser = async (formData: UserFormData) => {
  const response = await backendRequest(
    'POST', 'users/sign_up', formData
  );
  console.log(response)
  return response
}

export const logInUser = async (formData: UserFormData) => {
  const response = await backendRequest(
    'POST', 'users/sign_in', formData
  );
  console.log(response)
  return response
}

export const logOutUser = async () => {
  const response = await backendRequest(
    'DELETE', 'users/sign_out'
  );
  console.log(response)
  return response
}

// helpers
const CSRFToken = () => {
  const CSRFToken = document.querySelector(
    'meta[name="csrf-token"]'
  )?.getAttribute('content');

  return CSRFToken;
}

const backendRequest = async (
  method: string,
  url: string,
  data: UserFormData | null = null
) => {

  const csrfToken = CSRFToken();

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