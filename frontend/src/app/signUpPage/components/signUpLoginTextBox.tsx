import React from "react";

interface SignUpLoginTextBoxProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    numbersOnly?: boolean;
}

export default function SignUpLoginTextBox({ type="text", placeholder="", value="", onChange, numbersOnly, ...props }: SignUpLoginTextBoxProps & any) {
    function _onChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (numbersOnly) {
            const re = /^[0-9\b]+$/;
            if (e.target.value === '' || re.test(e.target.value)) {
                onChange(e);
            }
        } else {
            onChange(e);
        }
    }
    
    return (
        <input
            {...props}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={_onChange}
            className={`text-2xl px-6 py-2 text-gray-900 font-bold bg-[#d9d9d9] rounded-full transition duration-200 ${props.className}`}
        />
    );
}
