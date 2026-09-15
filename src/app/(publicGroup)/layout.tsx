import { Navbar } from '@/components/ui/shared/navbar'
import React from 'react'
import { getMe } from '../../../service/getMe'

const PublicLayout = ({children}:{children:React.ReactNode}) => {
  const user=getMe()
  return (
    <div className='max-w-7xl mx-auto '>
      <Navbar user={user}/>
    {children}
    </div>
  )
}

export default PublicLayout