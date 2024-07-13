"use client";
import React from "react";
import Link from "next/link";
import SignUpLoginButton from "../components/signUpLoginButton";
import SignUpLoginTextBox from "../components/signUpLoginTextBox";
import Logo from "../components/logo";

export default function LocationInformationPage() {
    return (
        <div className="grid h-screen place-items-center">
            <Logo titleText="Hi Sigma, please enter your location!" />
            <div className="flex flex-col gap-5 shadow-lg p-3 bg-[#D9D9D9] bg-opacity-[0.19] rounded-[10px]">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="country" className="text-sm text-gray-700">Country</label>
                        <SignUpLoginTextBox id="country" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm text-gray-700">New Password</label>
                        <SignUpLoginTextBox id="password" type="password" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fullName" className="text-sm text-gray-700">Full Name</label>
                        <SignUpLoginTextBox id="fullName" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phoneNumber" className="text-sm text-gray-700">Phone Number</label>
                        <SignUpLoginTextBox id="phoneNumber" placeholder="" />
                    </div>
                    <Link href="/signUpPage/specificInfoPage">
                        <SignUpLoginButton btnText="Next" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
