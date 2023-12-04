import React, { useState } from 'react';

function TravelersCounter({onTravelersChange,adults,children})
{
   

    console.log(adults,children);
    


    function handleSave()
    {
        onTravelersChange({ adults, children });
    };

    function handleIncrement({type,adults,children})
    {
        
        if(type === 'adults')
        {
            adults = adults + 1;
        }
        else if(type === 'children')
        {
            children += 1;
        }
        console.log(adults,children);
        // onTravelersChange({ adults, children });
    };

    function handleDecrement({type,adults,children})
    {
        if(type === 'adults' && adults > 1)
        {
            adults -= 1;
        }
        else if(type === 'children' && children > 0)
        {
            children -=1;
        }
        // onTravelersChange({ adults, children });
        console.log(adults,children);
    };


return (

    <div className='travelersOptions' style={{margin:'2px'}}>
        <div style={{ marginLeft: '20px',fontSize:'20px' }} >
            <label style={{ fontSize:'22px' }}>Adults :  </label>
            <button style={{ marginLeft: '10px', marginRight: '20px' ,fontSize:'20px'}}
            onClick={handleDecrement('adults',adults,children)}> -  </button>
            {adults}
            <button style={{ marginLeft: '20px',fontSize:'20px' }} 
            onClick={handleIncrement('adults',adults,children)}> + </button>
        </div>
        <br/>
        <div style={{ marginLeft: '2px',fontSize:'20px' }} >
            <label style={{ fontSize:'22px' }}>Children :  </label>
            <button style={{ marginLeft: '10px', marginRight: '20px' ,fontSize:'20px'}}> -  </button>
            {children}
            <button style={{ marginLeft: '20px',fontSize:'20px' }} > + </button>
        </div>
        <br/>
        <button style={ { marginLeft: '80px', display:'flex',fontSize:'20px' }}>Save</button>
        
    </div>
        
    
);


};

export default TravelersCounter;