import React, {useState} from 'react';
import loginApi from '../../server/api/auth';
import apiClient from '../../server/client';

type LoginData = {
  access_token: string
  refresh_token: string
}

const LoginForm: React.FC = () => {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [email, setEmailName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(e.target.value)
    setEmailName(e.target.value)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(e.target.value)
    setPassword(e.target.value)
  }

  const onClick = async () => {
    try {
      const data: { [key: string]: any } = {
        email: email,
        password: password,
      }
      const res = await apiClient.Post<LoginData>(loginApi(), data)
      console.log("res.data", res)
    } catch (err) {
      // setError(err)
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col shadow my-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input value={emailInputValue} onChange={(e) => onChangeEmail(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input value={passwordInputValue} onChange={(e) => onChangePassword(e)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </p>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  )
}

export default LoginForm;