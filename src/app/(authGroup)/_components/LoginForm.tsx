"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { logingAction } from "../_actions/authActions"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"




const LoginForm = () => {
  const [state,action,pending]=useActionState(logingAction,false)
  const router=useRouter()
  useEffect(()=>{
if(!state) return
if(state.success){
toast.success(state.message ||"login successful")
}
else if(!state.success){
 toast.error(state.message ||"login faiiled")
}

  },[state])
  return (
    <form action={action} className="space-y-4">
<Card className="p-5 space-y-4">
<input name="email" type="email" placeholder="enter your" required/>
<input name="password" type="password" placeholder="enter your password" required/>
<Button type="submit">
{
pending?"submitting..":"Login"
}
</Button>
</Card>
    </form>
  )
}

export default LoginForm