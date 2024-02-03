import React from 'react'
import Footer from '../UI/Footer/Footer'
import Header from '../UI/Header/Header'

export default function MainLayout({children}) {
  return (
    <div className='w-full min-h-screen bg-[#F7F6FF]'>
        <Header />
        <div className='pt-[60px]'>
            {children}
        </div>
        <Footer />
    </div>
  )
}
