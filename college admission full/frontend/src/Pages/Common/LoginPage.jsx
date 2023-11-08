import React from 'react'

function LoginPage() {
  return (
    <div className='w-[98.9vw] h-[100%]'>
        <div className='flex w-full'>
            <div className='w-full'>
            <img src='https://res.cloudinary.com/dnghkq7oo/image/upload/v1697170873/bg-01_wjw8yu.png' className='h-screen w-[50%]'></img>
            </div>
            <div>
                <h1>Welcome to Seek </h1>
                <p>Need an Account ?  <span className='text-blue'>Sign Up</span></p>
                <div>
                    <button className='p-3 bg-blue-950'>Admin</button>
                    <button >STAFF</button>
                    <button>STUDENT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage