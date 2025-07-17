'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image';
import { redirect } from 'next/navigation';



function User() {
    const { data: session } = useSession();
    if (!session) {
        redirect('/')
    }
    if (session) {
        return (
            <div className='flex flex-col justify-center items-center gap-5 m-5 '>
                <div className='flex gap-5 outline-4 outline-violet-300 p-2 rounded-md'>
                    <Image src={session.user?.image} height={200} width={200} alt='user img' className='rounded-md outline-2 outline-indigo-200' />
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-4xl text-white font-bold'>Welcome <span className='text-blue-100'>{session.user.name}</span></h2>
                        <h3 className='text-3xl text-white font-semibold'>Email : {session.user.email}</h3>
                    </div>

                </div>


            </div>
        )
    }
    return (
        <div>User</div>
    )
}

export default User