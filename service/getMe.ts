"use server"


import { cookies } from "next/headers";

export const getMe=async()=>{
const cookieStore=await cookies();
const accessToken=cookieStore.get("accessToken")?.value;

if(!accessToken){
    // throw new Error("User not Logged In")
    return {
        success:false,
        message:"User not Logged In"
    }
}
const res=await fetch(`${process.env.BACKEND_API_URL}/users/me`,{
    headers:{
Cookie:`accessToken=${accessToken}`
    }
})
const result=res.json()
console.log(result)
}