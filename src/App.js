import './App.css';
import Main from './components/Main'
import { useState } from 'react';
import {BrowserRouter as Router } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

const image = 'https://canvas-bridge.tubitv.com/vga5rw5i42ZibmHw-icBMhIDUAs=/img.adrise.tv/465428/5x-0.jpg';
const description = 'Youre receiving this monthly email because you turned on Location History, a Google Account-level setting that saves where you go in your private Timeline.Location History data also helps give you personalised information on Googl';
const directors = ['Gulti Mina', 'John Doe'];
const starring = ['Terence Hill', 'Clara Carey', 'MariaDB', 'MongoDB'];
const banner = 'https://canvas-bridge.tubitv.com/CvzVHiPIhX_qvTY3-hgKtTcegpU=/0x55:1739x700/1920x676/smart/img.adrise.tv/5de82011-a61b-4b63-ae8b-7b4c5b4986c2.jpg';
const price = 12000;
const dateReleased = (new Date()).toLocaleDateString();
const tags = ['Comedy', 'Drama', 'Action'];

const data = [
  {tags,title: 'Ace of Heart', image: 'https://canvas-bridge02.tubitv.com/6DYLUhWb3ShdVtYY_eZmNKewfmw=/400x574/smart/img.adrise.tv/26896acf-dc70-4458-b253-8bc5a1b7a34f.jpg', description, directors, starring, banner, dateReleased,price},
  {tags,title: 'Alligator Sky', image: 'https://canvas-bridge.tubitv.com/yieRfNe99utiLjghJiF6YA_9Zu4=/0x120:2000x2974/400x574/smart/img.adrise.tv/8d4b4505-2e9e-49fa-9281-0269bf4f3af5.jpg', description, directors, starring, banner, dateReleased,price},
  {tags,title: 'Saints and Soldiers: The Void', image: 'https://canvas-bridge.tubitv.com/IcWirqwWQQkNupvXYX26zMYiXDI=/400x574/smart/img.adrise.tv/cf67fa7f-d8b4-409a-af17-df476f8964ff.jpg', description, directors, starring, banner, dateReleased,price},
  {tags,title: 'Niagara Forest', image: image, description, directors, starring, banner, dateReleased,price},
  
];

 
function App() {
  const [movies] = useState(data);
  return (
   <Router>
      <div className="App">
    <Main movies={movies} />
    </div>
   </Router>
  );
}

export default App;
