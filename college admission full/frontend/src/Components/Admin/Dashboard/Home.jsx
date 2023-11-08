import React from 'react'

function Home() {
    let uname=localStorage.getItem('xname');
  return (
    <div className='h-screen w-[500px] shadow border border-gray-200 rounded m-2 flex justify-center'>
        <div className='flex flex-col justify-center'>
            <p className='text-3xl font-dmsans'>WELCOME</p>
            <p className='text-2xl font-dmsans'>{uname}</p>
        </div>
    </div>
  )
}

export default Home;