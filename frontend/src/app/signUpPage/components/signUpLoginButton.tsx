import React from "react";

type SignUpLoginButtonProps = {
    btnText: string;
    onClick?: () => void;
}

export default function SignUpLoginButton({ btnText, onClick }: SignUpLoginButtonProps) {
    return (
        <button 
            className="text-2xl px-6 py-2 text-white font-bold bg-[#F87472] rounded-full hover:bg-[#FF4744] transition duration-200"
            onClick={onClick}
        >
            {btnText}
        </button>
    );
}
