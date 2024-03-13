import React, { FC } from 'react';
import SignInForm from '../components/signInsignUpForm/SignInForm';
import { Inter } from 'next/font/google';
import "../components/signInsignUp.css";
import { Toaster } from '../components/signInsignUpUI/toaster';

const inter = Inter({ subsets: ['latin'] });

const SignInPage: FC = () => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='h-screen flex flex-col justify-center items-center'>
          <div className='bg-slate-200 p-10 rounded-md'>
            <SignInForm />
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
};

export default SignInPage;
