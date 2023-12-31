import './App.css';
import BrowseForm from './BrowseForm';
import { useState } from 'react';
import React from 'react';
import Travellogo from '../public/Travel-logo.jpeg';
// import axios from 'axios';

function App() {
const [from,setFrom] = useState('');
const [to,setTo] = useState('');
const [season,setSeason] = useState('');
const [trav,setTrav] = useState(1);

function handleFromChange(e)
{
  e.preventDefault();
  // console.log(e.target.value);
  setFrom(e.target.value);
};

function handleToChange(e)
{
  e.preventDefault();
  // console.log(e.target.value);
  setTo(e.target.value);

};

function handleSeasonChange(e)
{
  e.preventDefault();
  // console.log(e.target.value);
  setSeason(e.target.value);
};

function handleTravelers(travelers)
{
  console.log(travelers);
  setTrav(travelers);
}

function handleSubmit()
{
  console.log(from,to,season,trav);
}


  return (
    <>
    <header className='head'>
      <div> <img src= {Travellogo} height="100px"/> </div>
      <nav>
       
          <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">TRAVEL PACKAGES</a></li>
              <li><a href="#">CONTACT</a></li>
          </ul>
      </nav></header>
    <main className='body'>
      <BrowseForm from = {handleFromChange} to={handleToChange} 
      season={handleSeasonChange} trav={handleTravelers} submit={handleSubmit}/>
      
    </main>
      
    </>
  );
}

export default App;
