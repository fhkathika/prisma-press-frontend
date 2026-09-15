import { Navbar } from '@/components/ui/shared/navbar'
import React from 'react'
import { getMe } from '../../../service/getMe'

const DashboadLayout = ({children}:{children:React.ReactNode}) => {
  const user=getMe()
  return (
    <div>
       <Navbar user={user}/>
    {children}
    </div>
  )
}

export default DashboadLayout