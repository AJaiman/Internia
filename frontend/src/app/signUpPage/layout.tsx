import React, { createContext, useState } from 'react';
import SignUpContextProvider from './SignUpContextProvider';

export default function Layout({ children }: { children: React.ReactNode ;}) {
    return (
        <SignUpContextProvider>
            {children}
        </SignUpContextProvider>
    );
};