import React from "react";
import Link from "next/link";
import SignUpLoginButton from "../components/signUpLoginButton";
import SignUpLoginTextBox from "../components/signUpLoginTextBox";
import Logo from "../components/logo";
import { MdOutlineCameraAlt } from "react-icons/md";

export default function SpecificInformationPage() {
    return (
        <div className="grid h-screen place-items-center">
            <Logo titleText="Discover internships through your profile." />
            <div className="flex flex-col gap-5 shadow-lg p-3 bg-[#D9D9D9] bg-opacity-[0.19] rounded-[10px]">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="highschool" className="text-sm text-gray-700">High School</label>
                        <SignUpLoginTextBox id="highschool" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="gradYear" className="text-sm text-gray-700">Graduation Year</label>
                        <SignUpLoginTextBox id="gradYear" type="password" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="grade" className="text-sm text-gray-700">Grade (Must be in 9th grade to use Internia)</label>
                        <SignUpLoginTextBox id="grade" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="resume" className="text-sm text-gray-700">Resume</label>
                        <SignUpLoginTextBox id="resume" placeholder="" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="field" className="text-sm text-gray-700">Field of Interest</label>
                        <SignUpLoginTextBox id="field" placeholder="" />
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="profile-photo" className="text-sm text-gray-700 text-center">Profile Photo</label>
                        <button className="text-2xl px-6 py-2 text-black font-bold bg-[#d9d9d9] rounded-full">
                            <MdOutlineCameraAlt /> 
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <SignUpLoginButton btnText="Sign Up" />
                    </div>
                </div>
            </div>
        </div>
    );
}
