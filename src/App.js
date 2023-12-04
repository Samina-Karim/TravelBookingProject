import './App.css';
import BrowseForm from './BrowseForm';
// import axios from 'axios';

function handleSelectChange(e)
{
  e.preventDefault();
  console.log(e.target.value);
};



function App() {
  return (
    <>
    <header className='head'>head</header>
    <main className='body'>
      <BrowseForm SelectChange = {handleSelectChange}/>
      
    </main>
      
    </>
  );
}

export default App;
