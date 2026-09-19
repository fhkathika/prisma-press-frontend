import { Navbar } from '@/components/ui/shared/navbar'
import React from 'react'
import { getMe } from '../../../service/getMe'

const DashboadLayout =async ({children}:{children:React.ReactNode}) => {
  const user=await getMe()
  return (
    <div>
       <Navbar user={user}/>
    {children}
    </div>
  )
}

export default DashboadLayout