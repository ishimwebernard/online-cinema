import React from 'react'

export default function UpFrontMovie({ movie }) {
    return (
        <div className="z-40 w-full h-full">
           <img className="w-full h-96 object-cover" src={movie.banner} alt="mainmovie" />
           <div className="absolute flex top-72 bg-gray-900 w-full bg-opacity-20 h-24 items-center">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#fff">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
            <p className="font-bold text-gray-200 text-4xl">{movie.title}</p>
           </div>
        </div>
    )
}
