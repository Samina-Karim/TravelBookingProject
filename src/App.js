import './App.css';
import BrowseForm from './BrowseForm';
import Travellogo from '../src/public/Travel-logo.jpeg';
// import axios from 'axios';

function handleSelectChange(e)
{
  e.preventDefault();
  console.log(e.target.value);
};



function App() {
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
      <BrowseForm SelectChange = {handleSelectChange}/>
      
    </main>
      
    </>
  );
}

export default App;
