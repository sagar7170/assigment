import React from 'react'
import { useState } from 'react'

function App() {
  const [idArray, setIdArray] = useState([]);  
  const boxcolor = (e) => {
    const btn = document.querySelector(`#${e.target.id}`);
    btn.style.backgroundColor = "green";

    if(!idArray.includes(e.target.id)){
    setIdArray([...idArray,e.target.id]);
    }
  }
  
 console.log(idArray) 

  if(idArray.length===9){
     idArray.map((id,index)=>{
      setTimeout(() => {
        const btn = document.querySelector(`#${id}`);
      btn.style.backgroundColor = "orange";
      }, 2000*index);
      
     })
  }

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-3 mt-4">
      <div id="b1" onClick={boxcolor} className='bg-red-100 h-60'>01</div>
      <div id="b2" onClick={boxcolor} className='bg-red-100'>01</div>
      <div id="b3" onClick={boxcolor} className='bg-red-100'>01</div>
      <div id="b4" onClick={boxcolor} className='bg-red-100'>02</div>
      <div id="b5" onClick={boxcolor} className='bg-red-100'>02</div>
      <div id="b6" onClick={boxcolor} className='bg-red-100'>02</div>
      <div id="b7" onClick={boxcolor} className='bg-red-100'>03</div>
      <div id="b8" onClick={boxcolor} className='bg-red-100'>03</div>
      <div id="b9" onClick={boxcolor} className='bg-red-100'>03</div>
    </div>
  )
}

export default App