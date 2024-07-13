'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import GoogleLoginButton from "./components/googleLogin";
import SignUpLoginButton from "../signUpPage/components/signUpLoginButton";
import SignUpLoginTextBox from "../signUpPage/components/signUpLoginTextBox";
import { signIn, useSession } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const { data: session } = useSession();
  if (session || localStorage.getItem('token')) {
    router.push("/dashboard");
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      console.log('Form submitted with email:', email, 'and password:', password);

      try {
          const response = await fetch('http://127.0.0.1:8000/get-token', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });

          console.log('Response status:', response.status);

          if (response.ok) {
              const data = await response.json();
              localStorage.setItem('token', data.access_token);
              console.log('Logged in:', data.access_token);
              router.push("/dashboard")
          } else {
              console.log('Failed to log in');
          }
      } catch (error) {
          console.error('Error during fetch:', error);
      }
  };

  const pushSignup = () => {
    router.push("/signUpPage/generalInfoPage")
  }

  return (
    <>
      {/* Main Container */}
      <div className="grid h-screen place-items-center">
        <div className="flex flex-col gap-5 w-fit shadow-lg p-3 bg-[#D9D9D9] bg-opacity-[0.19] rounded-[10px]">
          <span className="flex justify-between items-end ">
            <h1 className="font-bold text-3xl">Login</h1>
            <button onClick={pushSignup} className="text-orange-300">Don't have an account?</button>
          </span>
          <div className="flex flex-col items-center justify-center gap-3">
            <GoogleLoginButton />
            <input type="text" placeholder="Email" className="w-80 h-10 rounded-full p-2 hover:shadow-lg focus:shadow-lg transition duration-200" value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" className="w-80 h-10 rounded-full p-2 hover:shadow-lg focus:shadow-lg transition duration-200" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <SignUpLoginButton btnText={"Sign In"} onClick={handleSubmit}/>
          </div>
          <div>
            <p className="text-orange-300">Forgot Password?</p>
          </div>
        </div>
      </div>
    </>
  )
}
