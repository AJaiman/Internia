'use client'

import { useState } from 'react';
import React from "react";
import SignUpLoginButton from "../components/signUpLoginButton";
import SignUpLoginTextBox from "../components/signUpLoginTextBox";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useRouter } from 'next/navigation';

export default function GeneralInfoPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/sign-up', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, name, phoneNumber })
            });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.detail || 'Unknown error');
                } else {
                    router.push('/signUpPage/locationInfoPage')
                }

                setMessage('User registered successfully!');
            } catch (error) {
                setMessage(`Error: ${error.message}`);
            }
    };

    const pushLogin = () => {
        router.push("/loginPage")
    }

    return (
        <div className="grid h-screen place-items-center">
            <div className="flex flex-col gap-5 shadow-lg p-3 bg-[#D9D9D9] bg-opacity-[0.19] rounded-[10px]">
                <span className="flex justify-between items-end ">
                    <p className="font-bold text-3xl">Sign Up</p>
                    <button onClick={pushLogin}className="text-[#F87472]">Have an account?</button>
                </span>
                <div className="flex space-x-2 justify-center items-baseline">
                    <p className="align-baseline font-bold text-xl">Sign up to start connecting with professors!</p>
                    {/* <p className="align-baseline font-bold text-2xl text-[#F87472]">Student</p> */}
                </div>
                {/* <div className="flex h-10 rounded-2xl bg-gray-200 p-1">
                    <button type="button"
                        className="rounded-xl inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out text-xs h-8 text-white w-full bg-[#F87472] px-3 shadow">
                        <span>Student</span>
                    </button>
                    <button type="button"
                        className="rounded-xl inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out text-xs h-8 text-slate-950 w-full px-3">
                        <span>Professor</span>
                    </button>
                </div> */}
                <div className="flex flex-col items-center justify-center gap-3">
                <SignUpLoginTextBox 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <SignUpLoginTextBox 
                        type="password" 
                        placeholder="New Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SignUpLoginTextBox 
                        placeholder="Full Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <SignUpLoginTextBox 
                        placeholder="Phone Number" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <SignUpLoginButton 
                        btnText="Create Account" 
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}
