import React from 'react'
import {Route, Router, Switch} from  "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import Category from './Category'

export default function BoilerPlate({ match, data }) {
    console.log(match.params.pathId);
    const BoilerData = data.find((boilerPlate)=>{
        return boilerPlate.title.toString().replaceAll(' ','-') === (match.params.pathId.toString())
    });
    const youMayAlsoLike = [];
    data.forEach((film)=>{
       if( BoilerData.title.toString() !== film.title.toString()){
            youMayAlsoLike.push(film)
       }
    })
    console.log(youMayAlsoLike);
    const starring = [];
    const directors = [];
    BoilerData.starring.forEach((star)=>{
        starring.push(
            <p className="text-gray-100">{star}</p> )
    })
    BoilerData.directors.forEach((director)=>{
        directors.push(
            <p className="text-gray-100">{director}</p> )
    })
    return (
             <div className=" h-full w-full h-full bg-gray-900">
              <Header nofixed={true} />
              <div className="grid grid-cols-3 px-5 space-x-2 ">
                <img className="h-72 object-cover" src={BoilerData.image} alt={BoilerData.title} />
                <div className="col-span-2 flex flex-col py-4">
                <p className="font-semibold text-2xl text-gray-100">{BoilerData.title}</p>
                <p className="text-gray-100 mt-8 ">{BoilerData.dateReleased}</p>
                <p>Duration</p>
                <p>Labels</p>

                </div>
              </div>
              <div className="px-5 mt-4">
              <button className="bg-gray-200 text-xl font-semibold rounded-md w-full focus:outline-none text-gray-800 px-5 py-2">Buy Now</button>

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
        <Footer />
               
        </div>
    )
}
