import React from "react";

export default function LoginSignUp() {
    return (
        <div className="flex items-center gap-8 border-l-2 border-gray-400 pl-6 ml-7">
            <button className="hover:text-orange-600 transition duration-200">Join Now</button>
            <button className="border-2 drop-shadow-md text-orange-600 border-orange-600 py-2 px-4 rounded-full hover:bg-orange-600 hover:text-white transition duration-200">Sign Up</button>
        </div>
    )
}