'use client';

import React, { useState } from 'react';
import DashNav from '../components/dashNav';
import Link from "next/link";
import { signOut } from "next-auth/react";

type settingProps = {
    pfp: string;
    email?: string;
    password?: string;
    location?: string;
};

export default function Page(props: settingProps) {
    const { email = "No email provided", password = "********", location = "No location provided" } = props;
    const [nightMode, setNightMode] = useState(false);

    return (
        <>
            <div className="relative">
                <div className="trap1 relative z-10">
                    <DashNav pfp={props.pfp} showSearch={false} />
                </div>
                <h1 className="text-3xl font-bold absolute top-20 left-4 z-20 pl-20">
                    Account Settings
                </h1>
                <h2 className="text-2xl font-semibold absolute top-36 left-6 z-20 pl-20">
                    Profile
                </h2>
                <div className="absolute top-48 left-6 z-20 pl-20">
                    <div className="flex flex-col divide-y-2 divide-gray-500">
                        {/* Email Address */}
                        <div className="flex justify-between items-center py-2">
                            <p className="text-lg font-medium">Email Address</p>
                            <span className="text-gray-600 pl-[30rem]">{email}</span>
                        </div>
                        {/* Password */}
                        <div className="flex justify-between items-center py-2">
                            <p className="text-lg font-medium">Password</p>
                            <span className="text-gray-600">{password}</span>
                        </div>
                        {/* Location */}
                        <div className="flex justify-between items-center py-2">
                            <p className="text-lg font-medium">Location</p>
                            <span className="text-gray-600">{location}</span>
                        </div>
                        {/* Profile Photo */}
                        <div className="flex justify-between items-center py-2">
                            <p className="text-lg font-medium">Profile Photo</p>
                        </div>
                    </div>
                    <div className="relative inline-block pl-4">
                        <img src="/eric_sehaj.png" alt="PFP" className="w-24 h-24 rounded-full" />
                        <button className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full hover:bg-gray-700 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8h16v-8M16 6l-4-4-4 4m4-4v12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold absolute top-[31rem] left-6 z-20 pl-20">
                    Preferences
                </h2>
                <div className="absolute top-[34rem] left-6 z-20 pl-20">
                    <div className="flex flex-col divide-y-2 divide-gray-500 pl-4">
                        <div className="flex justify-between items-center py-2">
                            <p className="text-lg font-medium">Night Mode</p>
                            <label className="inline-flex items-center cursor-pointer pl-[30rem]">
                                <span className="relative">
                                    <input type="checkbox" checked={nightMode} onChange={() => setNightMode(!nightMode)} className="sr-only peer" />
                                    <div className="block bg-gray-300 w-14 h-8 rounded-full peer-checked:bg-black"></div>
                                    <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition peer-checked:translate-x-full peer-checked:bg-white"></div>
                                </span>
                                <span className="ml-3 text-lg font-medium text-gray-900">{nightMode ? "On" : "Off"}</span>
                            </label>
                        </div>
                        <p className="text-lg font-medium py-2">Language</p>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold absolute top-[41rem] left-6 z-20 pl-20">
                    Other
                </h2>
                <div className="absolute top-[44rem] left-6 z-20 pl-20">
                    <div className="flex flex-col divide-y-2 divide-gray-500 pl-4">
                        <p className="text-lg font-medium py-2">Reset Recommendation Algorithm</p>
                        <button className="text-left text-lg font-medium py-2 text-red-500 hover:text-red-600 transition duration-200" onClick={() => signOut({ redirect: true, callbackUrl: `${window.location.origin}/signInPage`, })}>
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
