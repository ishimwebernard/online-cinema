/*eslint-disable */
import React, {useState, useEffect} from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import {v4} from 'uuid'

export default function Category({ title, items }) {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [rows, setRows] = useState(3);

   useEffect(()=>{
    if((windowSize > 640)){
        setRows(4)
    }
   }, []);
    const cols = [];
    let counter = 0;
    items.forEach(element => {
        if(counter < rows){
            let link = element.title.toString().replaceAll(' ', '-');
            cols.push(
                <Link key={v4()} to={`${link}`}>
                <div key={v4()} className="relative h-full  mt-4 ">
                    <div className="relative">
                    <img className="md:h-96 w-full " alt={element.title} src={element.image}/>
                    <div className="absolute items-center p-10 bg-gray-900 top-0 w-full h-full opacity-0 hover:opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-30 w-30" viewBox="0 0 20 20" fill="#902E44">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    </div>
                    </div>
                <p className="font-normal mt-2 text-gray-200 px-2 md:text-xl ">{element.title.toString().substring(0,25) + '...'}<br></br><span className="text-sweet-potato">{element.price}</span>
                </p>
                    
                </div>
                </Link>)
            counter += 1
        }
    });
    return (
        <div className="w-full mt-12 px-10 md:px-64">
           <p className="font-semibold  text-gray-200 text-xl md:text-4xl"> {title}</p>
         
           <div className={`w-full items-top  ${rows === 4 ? 'grid grid-cols-4 space-x-6':'grid grid-cols-3 space-x-4'}`}>
              {cols}  
           </div>
        </div>
    )
}
Category.defaultProps = {
    title: 'Most Popular',
}
