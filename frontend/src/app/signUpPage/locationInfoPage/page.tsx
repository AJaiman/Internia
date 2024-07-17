"use client";
import React, { useState } from "react";
import Link from "next/link";
import SignUpLoginButton from "../components/signUpLoginButton";
import SignUpLoginTextBox from "../components/signUpLoginTextBox";
import Logo from "../components/logo";
import { useSignUpContext } from "../SignUpContextProvider";
import { useRouter } from "next/navigation";

export default function LocationInformationPage() {
    const signUpContext = useSignUpContext();
    const router = useRouter();

    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');

    /**
     * save the location info and move to the next page
     */
    const handleSubmit = async () => {
        signUpContext.setLocationInfoPageData({
            country,
            state,
            city,
            preferredLanguage
        });
        
        router.push('/signUpPage/specificInfoPage');
    }

    return (
        <div className="grid h-screen place-items-center">
            <Logo titleText="Hi Sigma, please enter your location!" />
            <div className="flex flex-col gap-5 shadow-lg p-3 bg-[#D9D9D9] bg-opacity-[0.19] rounded-[10px]">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="country" className="text-sm text-gray-700">Country</label>
                        <SignUpLoginTextBox id="country" value={country} placeholder="" onChange={(e: any) => setCountry(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="state" className="text-sm text-gray-700">State</label>
                        <SignUpLoginTextBox id="state" value={state} placeholder="" onChange={(e: any) => setState(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="city" className="text-sm text-gray-700">City</label>
                        <SignUpLoginTextBox id="city" value={city} placeholder="" onChange={(e: any) => setCity(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="preferredLanguage" className="text-sm text-gray-700">Preferred Language</label>
                        <SignUpLoginTextBox id="preferredLanguage" value={preferredLanguage} placeholder="" onChange={(e: any) => setPreferredLanguage(e.target.value)} />
                    </div>
                    <Link href="/signUpPage/specificInfoPage">
                        <SignUpLoginButton btnText="Next" onClick={handleSubmit} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
