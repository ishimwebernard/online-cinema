import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Category from './Category'
import {v4} from 'uuid'

export default function BoilerPlate({ match, data }) {
    const BoilerData = data.find((boilerPlate)=>{
        return boilerPlate.title.toString().replaceAll(' ','-') === (match.params.pathId.toString())
    });
    const youMayAlsoLike = [];
    data.forEach((film)=>{
       if( BoilerData.title.toString() !== film.title.toString()){
            youMayAlsoLike.push(film)
       }
    })
    const starring = [];
    const directors = [];
    const tags = [];
    BoilerData.starring.forEach((star)=>{
        starring.push(
            <p key={v4()} className="text-gray-100">{star}</p> )
    })
    BoilerData.directors.forEach((director)=>{
        directors.push(
            <p key={v4()} className="text-gray-100">{director}</p> )
    });
    BoilerData.tags.forEach((tag)=>{
        tags.push(
            <p key={v4()} className="rounded-md px-2 text-gray-200 bg-gray-500">{tag}</p>
        )
    })
    return (
             <div className=" h-full w-full h-full bg-gray-900">
              <Header nofixed={true} />
              <div className="grid grid-cols-3 px-5 space-x-2 md:px-28 md:grid-cols-5 md:10 ">
               <div>
               <img className="w-full" src={BoilerData.image} alt={BoilerData.title} />
                <div className="hidden md:block">
                <button className="bg-gray-200 mt-4 text-xl font-semibold rounded-md w-full focus:outline-none text-gray-800 px-5 py-2">Buy Now</button>
              <button className=" border border-1 mt-2  text-xl font-semibold rounded-md w-full focus:outline-none text-gray-200 px-5 py-2">Share</button>
                </div>
              
               </div>
                <div className="col-span-2 flex flex-col py-4 md:col-span-4">
                <div className="md:ml-10">
                <p className="font-normal text-4xl text-gray-200 md:font-bold md:text-8xl">{BoilerData.title}</p>
                <p className="text-gray-400 mt-8 ">{BoilerData.dateReleased}</p>
                <p className="text-gray-400">1 hr 50</p>
                <div className="flex space-x-2 mt-4">
                    {tags}
                </div>
                </div>
                <div className="hidden md:block">

                <div className="ml-10">
                <p className="text-gray-100 text-gray-300 md:text-xl">{BoilerData.description}</p>
                <p>{}</p>
                <div className="grid grid-cols-4 mt-8">
                    <p className="text-gray-400">DIRECTOR</p>
                    <div className="col-span-2">
                    {directors}
                    </div>
                </div>
                <div className="grid grid-cols-4 mt-8">
                    <p className="text-gray-400">STARRING</p>
                    <div className="col-span-2">
                    {starring}
                    </div>
                </div>
                </div>
              </div>
                </div>
              </div>
              <div className="md:hidden">
              <div className=" mt-4 grid grid-cols-2 px-4 space-x-4 md:px-14">
              <button className="bg-gray-200 text-xl font-semibold rounded-md w-full focus:outline-none text-gray-800 px-5 py-2">Buy Now</button>
              <button className=" border border-1  text-xl font-semibold rounded-md w-full focus:outline-none text-gray-200 px-5 py-2">Share</button>

              </div>
                <p className="text-gray-100 mt-4 px-5 text-gray-300">{BoilerData.description}</p>
                <p>{}</p>
                <div className="grid grid-cols-4 px-5 mt-8">
                    <p className="text-gray-400">DIRECTOR</p>
                    <div className="col-span-3">
                    {directors}
                    </div>
                </div>
                <div className="grid grid-cols-4 px-5 mt-8">
                    <p className="text-gray-400">STARRING</p>
                    <div className="col-span-3">
                    {starring}
                    </div>
                </div>
                <Category title="You may also like" items={youMayAlsoLike} />
              </div>
              <div className="hidden md:block">
              <Category title="You may also like" items={youMayAlsoLike} />

              </div>
        <Footer />
               
        </div>
    )
}
