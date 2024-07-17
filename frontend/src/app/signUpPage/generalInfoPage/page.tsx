'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SignUpLoginButton from "../components/signUpLoginButton";
import SignUpLoginTextBox from "../components/signUpLoginTextBox";
import { useSignUpContext } from '../SignUpContextProvider';

export default function GeneralInfoPage() {
    const router = useRouter();

    const signUpContext = useSignUpContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    /**
     * save the general info and move to the next page
     */
    const handleSubmit = async () => {
        const intPhoneNumber = parseInt(phoneNumber);
        signUpContext.setGeneralInfoPageData({
            email,
            password,
            name,
            phoneNumber: intPhoneNumber
        });

        router.push('/signUpPage/locationInfoPage');
    }

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
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <SignUpLoginTextBox 
                        type="password" 
                        placeholder="New Password" 
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <SignUpLoginTextBox 
                        placeholder="Full Name" 
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                    />
                    <SignUpLoginTextBox 
                        placeholder="Phone Number" 
                        value={phoneNumber}
                        onChange={(e: any) => setPhoneNumber(e.target.value)}
                        numbersOnly
                    />
                    <SignUpLoginButton 
                        btnText="Next" 
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </div>
    )
}
