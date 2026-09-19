import { Navbar } from '@/components/ui/shared/navbar'
import React from 'react'
import { getMe } from '../../../service/getMe'

const PublicLayout = async ({children}:{children:React.ReactNode}) => {
  const user=await getMe()
  return (
    <div className='max-w-7xl mx-auto '>
      <Navbar user={user}/>
    {children}
    </div>
  )
}

export default PublicLayout