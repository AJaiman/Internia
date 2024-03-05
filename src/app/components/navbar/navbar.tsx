import React from "react";
import LoginSignUp from "./login";
import Searchbar from "./searchbar";

export default function Navbar() {
    return (
        <nav className="flex h-10 justify-between p-2">
            <h1 className="text-xl">Monkey Type</h1>
            <section className="flex items-center gap-2">
                <Searchbar />
                <LoginSignUp />
            </section>
        </nav>
    )
}