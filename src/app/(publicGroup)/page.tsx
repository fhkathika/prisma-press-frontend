import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getMe } from "../../../service/getMe";

export default async function Home() {
  const user=await getMe()
  console.log(user)
  return (
    <div >
     next js

     <Button 
     size={"xs"}
     variant={"destructive"}
     >click</Button>
    </div>
  );
}
