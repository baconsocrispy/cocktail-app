// types
import { UserFormData } from "@/components/auth-form/auth-form.component"

type AuthAPI = {
  jwt: string;
  status: {
    code: number;
    message: string;
  };
}

// api
export const signUpUser = async (formData: UserFormData) => {
  const response: AuthAPI = await backendAuthRequest(
    'POST', 'http://localhost:3001/signup', formData
  );
  return response
}

export const logInUser = async (formData: UserFormData) => {
  const response: AuthAPI = await backendAuthRequest(
    'POST', 'http://localhost:3001/signin', formData
  );
  return response
}

export const logOutUser = async () => {
  const response = await backendAuthRequest(
    'DELETE', 'http://localhost:3001/signout'
  );
  return response
}

// helpers
const backendAuthRequest = async (
  method: string,
  url: string,
  data: UserFormData | null = null,
) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json();
}