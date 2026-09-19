"use server"
import { cookies } from 'next/headers'
import { revalidateTag } from 'next/cache'


const logout = async() => {
    const cookiesStore=await cookies();
    cookiesStore.delete("accessToken")
    cookiesStore.delete("refreshToken")
    revalidateTag("my-profile","max")
}

export default logout