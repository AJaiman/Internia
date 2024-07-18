"use client"
import React, { useState } from "react";
import RecommendedProfessorCard from "./recommendedProfessor";

export default function TopHalfHomePage() {
    return (
        <div className="space-y-5">
            <div className="flex mx-40 justify-center">
                <p className="font-extrabold text-3xl">Title</p>
            </div>
            <div className="flex mx-40 bg-red-200 rounded-2xl p-5 flex-col space-y-2">
                <p className="w-full font-bold items-center">Abstract</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className="flex mx-40 space-x-5">
                <div className="flex-[6_6_0%] border p-5">
                    <p>sssssssssssssLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="flex-[4_4_0%] bg-orange-200 p-5 space-y-5 rounded-2xl">
                    <div className="flex justify-between">
                        <p>{"< Recommended professors"}</p>
                        <p className="text-gray-600">{"Authors >"}</p>
                    </div>

                    <RecommendedProfessorCard name="Eric Huang" school="UMD" matchPercentage={97} />

                    <RecommendedProfessorCard name="Eric Huang" school="UMD" matchPercentage={50} />

                    <RecommendedProfessorCard name="Eric Huang" school="UMD" matchPercentage={30} />

                    <RecommendedProfessorCard name="Eric Huang" school="UMD" matchPercentage={15} />
                </div>
            </div>
        </div>
    )
}