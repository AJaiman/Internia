"use client";

import React, { createContext, useState } from 'react';

interface GeneralInfoPageData {
    email: string;
    password: string;
    name: string;
    phoneNumber: number;
}

interface LocationInfoPageData {
    country: string;
    state: string;
    city: string;
    preferredLanguage: string;
}

interface SpecificInfoPageData {
    highSchool: string;
    graduationYear: number;
    grade: number;
    resume: string; // TODO: change type
    fieldOfInterest: string;
    profilePhoto: string;  // base64 encoded image?
}

interface SignUpContextType {
    setGeneralInfoPageData: React.Dispatch<React.SetStateAction<GeneralInfoPageData | null>>;
    setLocationInfoPageData: React.Dispatch<React.SetStateAction<LocationInfoPageData | null>>;
    setSpecificInfoPageData: React.Dispatch<React.SetStateAction<SpecificInfoPageData | null>>;
    requestSignUpServer: () => Promise<{ success: boolean, error: string | null }>;
}

const SignUpContext = createContext<SignUpContextType | null>(null);

/**
 * Context provider for the sign up page
 * Allows data to be passed between the general, location, and specific info pages so that it can be sent to the server all at once
 */
export default function SignUpContextProvider({ children }: { children: React.ReactNode }) {
    const [generalInfoPageData, setGeneralInfoPageData] = useState<GeneralInfoPageData | null>(null);
    const [locationInfoPageData, setLocationInfoPageData] = useState<LocationInfoPageData | null>(null);
    const [specificInfoPageData, setSpecificInfoPageData] = useState<SpecificInfoPageData | null>(null);

    /**
     * Sends the combined sign up data to the server
     */
    const requestSignUpServer = async () => {
        console.log({ ...generalInfoPageData, ...locationInfoPageData, ...specificInfoPageData });
        try {
            const response = await fetch('http://127.0.0.1:8000/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...generalInfoPageData, ...locationInfoPageData, ...specificInfoPageData })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Unknown error');
            }

            return { success: true, error: null };
        } catch (error: any) {
            return { success: false, error: error.message };
        }
    }

    const contextValue: SignUpContextType = {
        setGeneralInfoPageData,
        setLocationInfoPageData,
        setSpecificInfoPageData,
        requestSignUpServer
    };

    return (
        <SignUpContext.Provider value={contextValue}>
            {children}
        </SignUpContext.Provider>
    );
};

/**
 * Hook to access the sign up context for convenience
 */
export function useSignUpContext() {
    const context = React.useContext(SignUpContext);
    if (!context) {
        throw new Error('signupcontext not in a provider');
    }
    return context;
}
