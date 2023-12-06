import React,{ useState } from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaPlaneArrival } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GoPersonFill } from 'react-icons/go';
import TravelersCounter from './travelers';

function BrowseForm({SelectChange})
{
  const [adults, setAdults] = useState(1);  // useState for adults
  const [children, setChildren] = useState(0);  // useState for children
  const [isOpen, setIsOpen] = useState(false);


  function handleToggle()
    {
        setIsOpen(true);
    };


  function handleTravelers(travelers)
  {
    console.log(travelers);
  };

  return (
    <div id="full_browse">
      <h2>Embark on Your Journey: Find Your Perfect Travel Package!</h2>
      <div className='browseForm'>
        <div className='from'>
          <FaPlaneDeparture className='icon'/>
          <input className='fromInput' placeholder='From?' ></input>
        </div>

        <div className='to'>
          <FaPlaneArrival className='icon'/>
          <input className='toInput' placeholder='To?'></input>
        </div>
        
        <div className='date'>
          <FaRegCalendarAlt className='icon'/>
          <select className='selectInput' onChange={SelectChange}>
            <option value="">Select an option</option>
            <option value="winter">Winter</option>
            <option value="summer">Summer</option>
            <option value="spring">Spring</option>
            <option value="fall">Fall</option>
          </select>
        </div>

        <div className='travelers' onClick={handleToggle}>
          <GoPersonFill className='icon'/>
          {adults + children} Travelers
        </div>

        <div className='options'>
          {isOpen && <TravelersCounter onTravelersChange = {handleTravelers} 
          adults={adults} children={children}/>}
        </div>
        

        <button className='browse'>SEARCH</button>
        
      </div>

    </div>
  );
};

export default BrowseForm;