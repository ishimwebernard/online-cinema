import React from 'react'
import logo from '../assets/logo.png'

export default function Header({ nofixed }) {
    return (
        <div className={`black-transparent-gradient top-0 w-full py-2 grid grid-cols-6 items-center z-50 space-x-6 md:px-14 ${nofixed ? '':'fixed'}`}>
            <img src={logo} alt="logo" className="h-16" />
            <div className="col-span-5 flex flex-cols mr-5 space-x-2 items-center">
                <input className="rounded-2xl  px-2 py-2 bg-gray-200 bg-opacity-60 focus:outline-none placeholder-gray-300 w-full text-gray-100 md:block" placeholder="Search music, videos and audio" />
                <p className="font-semibold text-gray-800 bg-gray-100 px-2 py-2 text-sm text-center cursor-pointer mr-5 rounded-md">Home</p>

            </div>
        </div>
    )
}
