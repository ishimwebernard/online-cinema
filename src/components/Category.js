/*eslint-disable */
import React, {useState, useEffect} from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'

export default function Category({ title, items }) {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [rows, setRows] = useState(3);

   useEffect(()=>{
    if((windowSize > 640)){
        setRows(6)
    }
   }, []);
    const cols = [];
    let counter = 0;
    items.forEach(element => {
        if(counter < rows){
            let link = element.title.toString().replaceAll(' ', '-');
            cols.push(
                <Link to={`${link}`}>
                <div className=" h-60 bg-gray-700 mt-4 linear-data rounded-xl  border-1 border-gray-400 md:h-96 ">
                <img className="row-span-5 h-4/6 w-full  object-fill" alt={element.title} src={element.image}/>
                <p className="font-normal mt-2 text-gray-200 px-2 md:text-xl ">{element.title.toString().substring(0,25) + '...'}<br></br><span className="text-sweet-potato">{element.price}</span>
                </p>
                </div>
                </Link>)
            counter += 1
        }
    });
    return (
        <div className="w-full mt-12 px-4 md:px-20">
           <div className="grid grid-cols-2 items-center px-2">
           <p className="font-semibold text-gray-200 text-xl md:text-4xl"> {title}</p>
           <div className="grid grid-cols-6">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 col-start-4" viewBox="0 0 20 20" fill="#F3F4F6">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
           </div>
           </div>
           <div className={`px-2  w-full items-center  ${rows === 6 ? 'grid grid-cols-6 space-x-2':'grid grid-cols-3 space-x-2'}`}>
              {cols}  
           </div>
        </div>
    )
}
Category.defaultProps = {
    title: 'Most Popular',
}
