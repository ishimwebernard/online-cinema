import './App.css';
import Main from './components/Main'
import { useState } from 'react';
import {BrowserRouter as Router } from "react-router-dom";


const image = 'https://canvas-bridge.tubitv.com/vga5rw5i42ZibmHw-icBMhIDUAs=/img.adrise.tv/465428/5x-0.jpg';
const description = 'Youre receiving this monthly email because you turned on Location History, a Google Account-level setting that saves where you go in your private Timeline.Location History data also helps give you personalised information on Googl';
const directors = ['Gulti Mina', 'John Doe'];
const starring = ['Terence Hill', 'Clara Carey', 'MariaDB', 'MongoDB'];
const banner = image;
const price = 12000;
const dateReleased = (new Date()).toLocaleDateString();
const data = [
  {title: 'Doc West', image: image, description, directors, starring, banner, dateReleased,price},
  {title: 'Alligator Sky', image: image, description, directors, starring, banner, dateReleased,price},
  {title: 'Scrimba Courses', image: image, description, directors, starring, banner, dateReleased,price},
  {title: 'Niagara Forest', image: image, description, directors, starring, banner, dateReleased,price},
  {title: 'Julias Kanimba', image: image, description, directors, starring, banner, dateReleased,price},
  {title: 'OJane Doe', image: image, description, directors, starring, banner, dateReleased,price},
  {title: 'Minani Kirabo', image: image, description, directors, starring, banner, dateReleased,price},
];

 
function App() {
  const [movies, setMovies] = useState(data);
  return (
   <Router>
      <div className="App">
    <Main movies={movies} />
    </div>
   </Router>
  );
}

export default App;
