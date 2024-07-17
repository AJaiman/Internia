"use client";
import { useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import Logo from "../components/logo";
import SignUpLoginButton from "../components/signUpLoginButton";
import SignUpLoginTextBox from "../components/signUpLoginTextBox";
import { useSignUpContext } from "../SignUpContextProvider";

export default function SpecificInformationPage() {
    const signUpContext = useSignUpContext();

    const [highSchool, setHighSchool] = useState('');
    const [gradYear, setGradYear] = useState('');
    const [grade, setGrade] = useState('');
    const [resume, setResume] = useState('');
    const [field, setField] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');

    /**
     * save the specific info and send to the server to request sign up
     */
    const handleSubmit = async () => {
        const intGradYear = parseInt(gradYear);
        const intGrade = parseInt(grade);
        signUpContext.setSpecificInfoPageData({
            highSchool,
            graduationYear: intGradYear,
            grade: intGrade,
            resume,
            fieldOfInterest: field,
            profilePhoto
        });

        // wait because setState takes a little bit of time
        await new Promise(resolve => setTimeout(resolve, 3000));

        const { success, error } = await signUpContext.requestSignUpServer();
        console.log("sign up: ");
        console.log({ success, error });
    }

    return (
        <div className="grid h-screen place-items-center">
            <Logo titleText="Discover internships through your profile." />
            <div className="flex flex-col gap-5 shadow-lg p-3 bg-[#D9D9D9] bg-opacity-[0.19] rounded-[10px]">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="highschool" className="text-sm text-gray-700">High School</label>
                        <SignUpLoginTextBox id="highschool" value={highSchool} placeholder="" onChange={(e: any) => setHighSchool(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="gradYear" className="text-sm text-gray-700">Graduation Year</label>
                        <SignUpLoginTextBox id="gradYear" value={gradYear} placeholder="" onChange={(e: any) => setGradYear(e.target.value)} numbersOnly />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="grade" className="text-sm text-gray-700">Grade (Must be in 9th grade to use Internia)</label>
                        <SignUpLoginTextBox id="grade" value={grade} placeholder="" onChange={(e: any) => setGrade(e.target.value)} numbersOnly />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="resume" className="text-sm text-gray-700">Resume</label>
                        <SignUpLoginTextBox id="resume" value={resume} placeholder="" onChange={(e: any) => setResume(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="field" className="text-sm text-gray-700">Field of Interest</label>
                        <SignUpLoginTextBox id="field" value={field} placeholder="" onChange={(e: any) => setField(e.target.value)} />
                    </div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="profile-photo" className="text-sm text-gray-700 text-center">Profile Photo</label>
                        <button className="text-2xl px-6 py-2 text-black font-bold bg-[#d9d9d9] rounded-full">
                            <MdOutlineCameraAlt /> 
                        </button>
                        {/* TODO: profile photo uplaod */}
                    </div>
                    <div className="flex flex-col">
                        <SignUpLoginButton btnText="Sign Up" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}
