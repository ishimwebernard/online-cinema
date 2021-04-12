import React from 'react'
import Header from './Header'
import UpFrontMovie from './UpFrontMovie'
import Category from './Category'
import Footer from './Footer'

export default function LandingPage({ movies }) {
    return (
        <div className="h-full w-full bg-gray-800">
              <Header />
            <UpFrontMovie movie={movies[0]} />
            <Category items={movies} title="Most Popular" />
            <Category items={movies} title="Comedy" />
            <Category items={movies} title="Family Movies" />
            <Category items={movies} title="Action" />
            <Footer />
        </div>
    )
}
