import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session?.user) {
    return <h1 className='text-4xl'>Welcome back {session?.user.username}</h1>;
  }
  
  return <h2>Please login to see the dashboard</h2>
}

export default page