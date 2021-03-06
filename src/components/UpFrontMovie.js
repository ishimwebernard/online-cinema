import React from 'react'
import { TimelineMax } from 'gsap/all'


export default function UpFrontMovie({ movie }) {
    let moviePic = movie.banner;
    let movieTitle = 'Ace of heart';
    const banner1 = movie.banner;
    const otherMoviePic = 'https://canvas-bridge.tubitv.com/tvSrRPWTtjMApXtfkbTCesAOtdM=/0x620:2000x1361/1920x676/smart/img.adrise.tv/49182b8f-c258-4a6c-8252-20991fffda21.jpg';
    const banner2 = 'https://canvas-bridge.tubitv.com/tvSrRPWTtjMApXtfkbTCesAOtdM=/0x620:2000x1361/1920x676/smart/img.adrise.tv/49182b8f-c258-4a6c-8252-20991fffda21.jpg';
    let recentPicture = 0;
    let recentTitle = 0;
    const pictures = [banner1, otherMoviePic, banner2];
    const titles = [movie.title, "Expo 2021", "Chogm 2005" ]
    const tl = new TimelineMax();
      
        setInterval(()=>{
            try{
            moviePic = (pictures[recentPicture]);
            movieTitle = (titles[recentTitle]);
            recentPicture += 1;
            recentTitle += 1;
            recentPicture = recentPicture === 3 ? 0:recentPicture;
            recentTitle = recentTitle === 3 ? 0:recentTitle;
            if(document.getElementById('upfr') !== null || document.getElementById('upfr') !== undefined){
                document.getElementById('upfr').src = moviePic;
                document.getElementById('upfrtitle').innerHTML = movieTitle;
                tl.fromTo(document.getElementById('upfr'), 2, { opacity: '0%'}, { opacity: '70%'}, "+=0")
            }
            }catch(err){}
        }, 5000);
        //md:grid md:grid-rows-3

    return (
        <div className="relative w-full lg:h-1/2 md:h-1/2">
          <img id="upfr" className="w-full object-cover img-responsive-sm" src={moviePic} alt="mainmovie" />
          <div className="absolute md:px-64 top-3/4   w-full  ">
          {/* <div>{' '}</div> */}
               <p id="upfrtitle" className="font-bold  m-auto text-4xl text-gray-100    md:text-8xl ">{movieTitle}</p>
           <p className="hidden md:block md:w-full md:text-center">
                <span className="text-gray-100 px-12 py-4 bg-cuny-red font-semibold text-xl cursor-pointer ">Watch Now</span>
           </p>

            
          </div>
           {/* <div className="absolute flex top-72 w-full h-24 items-center px-4 md:px-16 md:block">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:hidden" viewBox="0 0 20 20" fill="#fff">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            <p className="font-bold text-gray-200 text-4xl md:text-8xl">{movie.title}</p>
            <div className="hidden text-center w-full mt-12  md:block">
                <span className="px-16 py-8 cursor-pointer rounded-xl text-gray-800 bg-gray-200 text-2xl font-semibold hover:bg-gray-300">Buy Now</span>
            </div>
           </div> */}

        </div>
    )
}
