import React from 'react'
import LogoMono from '../assets/saasa_mono.png'
import FooterComponent from './FooterComponent'

export default function Footer() {
    return (
        <div className="px-2 mt-8 bg-black">
           <div className=" flex px-16 ">
           <img src={LogoMono} className="h-40 w-40 mt-16 "/>
           <p className="font-normal text-gray-100 mt-16">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
           <p className="text-center py-10 mt-0 text-gray-300"> <span>Copyright 2021 All rights reserved | Saasa Online Cinema</span> </p>
        </div>
    )
}
