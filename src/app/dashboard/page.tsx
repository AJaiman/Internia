import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import BottomHalfHomePage from "./components/bottomHalfHomePage";
import TopHalfHomePage from "./components/topHalfHomePage";
import DashboardNav from "./components/dashNav";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  return (
    <div className="space-y-10">
        <DashboardNav pfp="" />
        <TopHalfHomePage />
        <BottomHalfHomePage />
    </div>
  )
}

export default page