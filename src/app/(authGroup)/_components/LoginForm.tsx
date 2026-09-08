"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { logingAction } from "../_actions/authActions"



const LoginForm = () => {
  return (
    <form action={logingAction} className="space-y-4">
<Card className="p-5 space-y-4">
<input name="email" type="email" placeholder="enter your" required/>
<input name="password" type="password" placeholder="enter your password" required/>
<Button type="submit">
    Login

</Button>
</Card>
    </form>
  )
}

export default LoginForm