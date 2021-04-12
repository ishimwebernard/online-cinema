import React from 'react'
import logo from '../assets/logo.png'

export default function Header({ nofixed }) {
    return (
        <div className={`black-transparent-gradient top-0 w-full py-2 grid grid-cols-6 items-center z-50 space-x-6 ${nofixed ? '':'fixed'}`}>
            <img src={logo} alt="logo" className="h-16" />
            <div className="col-span-4 flex flex-cols space-x-8  right-0 mr-5 items-center right-0 ">
                <p className="font-semibold text-gray-100 text-sm text-center">Browse</p>
                <p className="font-semibold text-gray-100 text-sm text-center">Music</p>
                <p className="font-semibold text-gray-100 text-sm text-center">Movies</p>
            </div>
        </div>
    )
}
