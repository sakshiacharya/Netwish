import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 py-5 items-center' >
      <span className='text-white text-4xl font-serif font-bold flex'>
      <svg stroke="#991B1B" fill="#991B1B" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M5.39.004l4.75 13.46v-.007l.376 1.06c2.088 5.908 3.21 9.075 3.216 9.082.004 0 .32.02.702.04 1.156.05 2.59.18 3.676.31.25.03.466.04.48.03l-4.71-13.36-.436-1.23-2.423-6.85c-.46-1.3-.85-2.408-.87-2.45L10.12 0H5.395zM13.898.012l-.01 5.306-.008 5.306-.437-1.232V9.39l-.565 11.81c.555 1.567.852 2.403.855 2.407.004.004.32.024.702.042 1.157.05 2.59.18 3.68.31.25.03.467.04.48.03s.02-5.42.017-12.01L18.604.01h-4.706zM5.39.002v11.99c0 6.594.007 11.995.015 12.003s.416-.03.907-.086c.49-.06 1.17-.13 1.51-.16.518-.05 2.068-.15 2.248-.15.052 0 .056-.27.063-5.08l.008-5.08.38 1.06.13.376.57-11.8-.19-.546-.88-2.44-.03-.087H5.39z"></path></svg>
        Netwish</span>


      <div className='flex justify-between items-center  ' >
        <div className='border-slate-400 border h-14 flex rounded-md mr-20 '>
          <div className='ml-5 mt-3'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg>
          </div>
          <input className=' block  bg-black  outline-0 text-white rounded-lg px-2'
            type="search" placeholder='Search Everyting'

          />
        </div>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#fff" stroke-width="2" d="M4,19 L4,9 C4,4.582 7.582,1 12,1 C16.418,1 20,4.582 20,9 L20,19 M1,19 L23,19 M15,19 L15,20 C15,21.657 13.657,23 12,23 C10.343,23 9,21.657 9,20 L9,19"></path></svg>
        <img className='h-4/3 w-20 ml-10' src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png' alt='profile picture' />

      </div>

    </nav>
  )
}
