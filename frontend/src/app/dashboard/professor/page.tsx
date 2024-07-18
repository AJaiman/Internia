import { getServerSession } from "next-auth";
import Publication from "../components/publication";

export default async function page() {
    const session = await getServerSession();
    console.log(session);

    const name = "Eric Huang";
    const school = "UMD";
    const department = "Engineering";
    const email = "email@gmail.com";
    const phone = "123-456-7890";
    
    return (
      <>
        <div className="flex p-4 space-y-4 flex-col rounded-2xl bg-red-200">
            <div className="flex flex-row">
                <div className="flex-[3_3_0%] p-4">
                    <p>avatar</p>
                </div>
                <div className="flex-[7_7_0%] p-4 space-y-2">
                    <p className="text-3xl font-bold">{name}</p>
                    <p className="text-xl">{school}</p>
                    <div className="h-1 w-80% bg-black"></div>
                    <div className="flex flex-row space-x-2">
                        <p className="text-lg font-bold">Department: </p>
                        <p className="text-lg">{department}</p>
                    </div>
                    <p className="text-lg font-bold">Contact:</p>
                    <div className="flex justify-between px-10">
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </div>
                </div>
            </div>
            <p className="flex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-col space-y-4">
                <p className="text-2xl font-bold">Publications:</p>
                <div className="flex flex-col space-y-2 h-[32rem] overflow-y-auto">
                    <Publication
                        title="Rizzology: The study of Rizz and its effects on human nature"
                        authors="Authors"
                        year={2024}
                        link=""
                    />
                    <Publication
                        title="Rizzology: The study of Rizz and its effects on human nature"
                        authors="Authors"
                        year={2024}
                        link=""
                    />
                    <Publication
                        title="Rizzology: The study of Rizz and its effects on human nature"
                        authors="Authors"
                        year={2024}
                        link=""
                    />
                    <Publication
                        title="Rizzology: The study of Rizz and its effects on human nature"
                        authors="Authors"
                        year={2024}
                        link=""
                    />
                    <Publication
                        title="Rizzology: The study of Rizz and its effects on human nature"
                        authors="Authors"
                        year={2024}
                        link=""
                    />
                </div>
            </div>
        </div>
      </>
    )
  }