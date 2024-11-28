import React from "react";

export default function HomeLayout({
  children 
} : Readonly<{
  children: React.ReactNode
}>) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full h-full px-24">
            <div className="flex flex-col w-4/5 max-h-[80vh] py-4">
                {children}
            </div>
        </div>
    )
}