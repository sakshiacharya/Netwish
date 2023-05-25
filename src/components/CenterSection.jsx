import React from 'react'
import { Badge, Button } from "@nextui-org/react";
import { ContinueWatching } from './ContinueWatching';


export const CenterSection = () => {
    return (
        <>
        <section className='h-full w-10/12 float-right'>
            <div className=" h-4/6 w-10/12 m-auto bg-[url('/public/bgmain.png')] bg-no-repeat bg-cover absolute right-0  bg-center">
           
                <div className=' bg-linear-to-r from-black to-gray-65 to-blue-500 block w-96 m-20 mt-8 font-serif ' >
                <div className='pb-8'>
                
                <Badge disableOutline color="red" style={{background: "#991B1B"}} size="lg">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 6c3.537 0 6.837 1.353 9.293 3.809l1.414-1.414C19.874 5.561 16.071 4 12 4 7.929 4.001 4.126 5.561 1.293 8.395l1.414 1.414C5.163 7.353 8.463 6 12 6zM17.671 14.307c-3.074-3.074-8.268-3.074-11.342 0l1.414 1.414c2.307-2.307 6.207-2.307 8.514 0L17.671 14.307z"></path><path d="M20.437,11.293c-4.572-4.574-12.301-4.574-16.873,0l1.414,1.414c3.807-3.807,10.238-3.807,14.045,0L20.437,11.293z"></path><circle cx="12" cy="18" r="2"></circle></svg>{" "}Live</Badge>
                </div>
                    <h1 className='text-7xl pb-5 uppercase font-bold '>Netwish</h1>
                    <span className='text-4xl  '>Avengers: Infinity War</span>
                    <div className='pt-12'>
                    <Button size="md" style={{background: "#991B1B"}} >Watch</Button>
                    </div>
                </div> 
                
            </div>

            
        </section>
       
        </>
    )
}   
