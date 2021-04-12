import React from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

export default function Category({ title, items }) {
    const cols = [];
    let counter = 0;

    items.forEach(element => {
        if(counter < 3){
            let link = element.title.toString().replaceAll(' ', '-');
            cols.push(
                <Link to={`${link}`}>

                <div className=" h-60 bg-gray-600 mt-4  border border-1 border-gray-400 ">
                <img className="row-span-5 h-4/6  object-cover" alt={element.title} src={element.image}/>
                <p className="font-normal text-gray-200  px-2">{element.title}<br></br><span className="text-sweet-potato">{element.price}</span>
                </p>
                </div>
                </Link>

            )
            counter += 1
        }
    });
    return (
        <div className="w-full">
           <div className="grid grid-cols-2 items-center px-2">
           <p className="font-semibold text-gray-200 text-xl"> {title}</p>
           <div className="grid grid-cols-6">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 col-start-4" viewBox="0 0 20 20" fill="#F3F4F6">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
           </div>
           </div>
           <div className="px-4 grid grid-cols-3 space-x-2  w-full items-center">
              {cols}  
           </div>
        </div>
    )
}
Category.defaultProps = {
    title: 'Most Popular',
}
