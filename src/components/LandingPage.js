import React from 'react'
import Header from './Header'
import UpFrontMovie from './UpFrontMovie'
import Category from './Category'
import Footer from './Footer'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { v4 as uuidv4 } from 'uuid';

gsap.registerPlugin(CSSPlugin);



export default function LandingPage({ movies }) {
    return (
        <div className="h-full w-full bg-gray-800">
              <Header />
            <UpFrontMovie movie={movies[0]} />
            <Category key={uuidv4()} items={movies} title="Movies" />
            <Category key={uuidv4()} items={movies} title="Events" />
            <Footer />
        </div>
    )
}
