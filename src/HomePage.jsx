import React from 'react'
import { Sidenav } from './components/Sidenav'
import { Navbar } from './components/Navbar'
import { CenterSection } from './components/CenterSection'
import { ContinueWatching } from './components/ContinueWatching'

export const HomePage = () => {
    return (
        <>
        <div className=' w-full h-screen'>
            <div className='block' >
                <Navbar/>
                <div className='block'>
                <Sidenav/>
                <CenterSection/> 
                </div>
            </div>
           
        </div>
         <ContinueWatching/>
         </>
    )
}
