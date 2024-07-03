import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import BottomHalfHomePage from "./components/bottomHalfHomePage";
import TopHalfHomePage from "./components/topHalfHomePage";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  return (
    <div className="space-y-10">
        <TopHalfHomePage />
        <BottomHalfHomePage />
    </div>
  )
}

export default page