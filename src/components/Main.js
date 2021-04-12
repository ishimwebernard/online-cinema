import React from 'react'
import LandingPage from './LandingPage'
import { Switch, Route } from "react-router-dom";
import BoilerPlate from './BoilerPlate'


export default function Main({ movies }) {
    return (
        <Switch>
            <Route path="/:pathId" render={({match})=>(
                <BoilerPlate match={match} data={movies} />
            )}/>
             <Route path="/" render={({match})=>(
              <LandingPage movies={movies} />
            )} />
        </Switch>


    )
}
