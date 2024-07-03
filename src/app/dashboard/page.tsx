import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import BottomHalfHomePage from "./components/bottomHalfHomePage";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  return (
    <></>
  )
}

export default page