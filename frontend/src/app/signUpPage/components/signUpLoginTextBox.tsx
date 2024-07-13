import React from "react";

interface SignUpLoginTextBoxProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignUpLoginTextBox({ type="text", placeholder="", value="", onChange, ...props }: SignUpLoginTextBoxProps & any) {
    return (
        <input
            {...props}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`text-2xl px-6 py-2 text-gray-900 font-bold bg-[#d9d9d9] rounded-full transition duration-200 ${props.className}`}
        />
    );
}
