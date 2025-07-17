'use client'
import React,{useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    const { data: session } = useSession()
    const [showDropdown, setShowDropdown] = useState(false);
    if (session) {
        return <nav className="flex justify-between bg-gray-800 text-white p-3 text-xl">

            <div>

                <button  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button" onClick={()=>setShowDropdown(true)}>
                    <span className="sr-only">Open user menu</span>
                    <Image src={session.user?.image} alt='user image' height={40} width={40} className='rounded-full outline-2 outline-white' />
                </button>
                { showDropdown && (
                <div id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Bonnie Green</div>
                        <div className="font-medium truncate">name@flowbite.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                    </ul>
                    <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                    </div>
                </div>
                )}



                <span> Signed in as </span> <span className='text-blue-200'>{session.user.email}</span> <br />

            </div>

            <button onClick={() => signOut()} className="bg-red-500 p-2 rounded-md hover:cursor-pointer hover:bg-red-700">Sign out</button>
        </nav>
    }
    return <div>
        <div className='flex flex-col gap-3 justify-center items-center bg-gray-700 p-3'>
            Not signed in <br />
            <button onClick={() => signIn('github')} className='bg-green-500 text-white font-semibold p-2 rounded-md w-50 hover:cursor-pointer hover:bg-green-700'>Sign in</button>
        </div>
    </div>
}

export default Navbar