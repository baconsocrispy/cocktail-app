// types
import { User } from "@/contexts/user.context";
import { UserFormData } from "@/components/auth-form/auth-form.component"

type UserAPI = {
  jwt: string;
  user: User;
  status: {
    code: number;
    message: string;
  };
}

// api POST/DELETE calls
export const signUpUser = async (formData: UserFormData) => {
  const response: UserAPI = await backendRequest(
    'POST', 'http://localhost:3001/signup', formData
  );
  return response
}

export const logInUser = async (formData: UserFormData) => {
  const response: UserAPI = await backendRequest(
    'POST', 'http://localhost:3001/signin', formData
  );
  return response
}

export const logOutUser = async () => {
  const response = await backendRequest(
    'DELETE', 'http://localhost:3001/signout'
  );
  return response
}

// helpers
const backendRequest = async (
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