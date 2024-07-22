import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
   import { LC, NB, SB, UC } from './Data';

function App() {
  let [useupper,setupper]=useState(false);
  let[uselower,setlower]=useState(false);
  let [usenumber,setnumber]=useState(false);
  let [usesymbol,setsymbol]=useState(false);
  let[uselenght,setlength]=useState(10);
  let[usefinal,setfinal]=useState("");
  let Generation=()=>{
    let characters='';
    let index='';
    let finalpass='';
    if(useupper || uselower || usenumber || usesymbol){
      if(useupper){characters+=UC};
      if(uselower){characters+=LC};
      if(usenumber){characters+=NB};
      if(usesymbol){characters+=SB};
      for(let i=0;i<uselenght;i++){
        index=Math.floor(Math.random()*characters.length);
        finalpass+=characters.charAt(index);
      }
      setfinal(finalpass);

    }
    else{
      toast("NO CHECK BOX SELECTED");
    }

  }
  


  return (
    <div className="flex min-h-screen justify-center items-center bg-custome-dark-blue">
      <ToastContainer />
      <div className="bg-custome-light-blue h-[500px]  border-[5px] border-white rounded-tl-[100px] rounded-br-[100px]  w-[300px] sm:h-[500] sm:w-[400px] md:w-[550px] md:h-[400px] flex flex-col text-center">
        <h1 className="text-3xl text-custom-white mt-[20px] sm:mt-[40px] font-bold">PASSWORD GENERATOR</h1>
        <input type="text" className='w-[250px] mx-auto mt-[8px] border- h-[30px] bg-gray-700 text-white font-bold' value={usefinal}/>
        <div className='text-custom-white'>
          <div className='flex flex-row  justify-between mb-[20px] lg:mb-[10px] md:mb-[10px] sm:mb-[10px] '>
            <label className='text-2xl font-bold ml-[20px]' htmlFor=""> Character Length</label>
            <input className='mr-[20px]  mt-[10px] text-black text-center lg:mt-[5px] md:mt-[5px] sm:mt-[5px] w-[100px] h-[20px]' type="number" max='20' min={5} value={uselenght} onChange={(event)=>{
              setlength(event.target.value);
            }}  name="" id="" />
          </div>
          <div className='flex flex-row justify-between  mb-[20px] lg:mb-[10px] md:mb-[10px] sm:mb-[10px] '>
            <label className='text-2xl font-bold ml-[20px]' htmlFor=""> Include Uppercase</label>
            <input className='mr-[20px] mt-[10px] lg:mt-[5px] md:mt-[5px] sm:mt-[5px] w-[20px] h-[20px]' type="checkbox" checked={useupper} onChange={()=>{setupper(!useupper)}} name="" id="" />
          </div>
          <div className='flex flex-row justify-between  mb-[20px] lg:mb-[10px] md:mb-[10px] sm:mb-[10px] '>
            <label className='text-2xl font-bold ml-[20px]' htmlFor=""> Include Lowercase</label>
            <input className='mr-[20px] mt-[10px] lg:mt-[5px] md:mt-[5px] sm:mt-[5px] w-[20px] h-[20px]' type="checkbox" checked={uselower} onChange={()=>{setlower(!uselower)}} name="" id="" />
          </div>
          <div className='flex flex-row justify-between  mb-[20px] lg:mb-[10px] md:mb-[10px] sm:mb-[10px] '>
            <label className='text-2xl font-bold ml-[20px]' htmlFor=""> Include Numbers</label>
            <input className='mr-[20px] mt-[10px] lg:mt-[5px] md:mt-[5px] sm:mt-[5px] w-[20px] h-[20px]' type="checkbox" checked={usenumber} onChange={()=>{setnumber(!usenumber)}} name="" id="" />
          </div>
          <div className='flex flex-row justify-between  mb-[20px] lg:mb-[10px] md:mb-[10px] sm:mb-[10px] '>
            <label className='text-2xl font-bold ml-[20px]' htmlFor=""> Include Symbols</label>
            <input className='mr-[20px] mt-[10px] lg:mt-[5px] md:mt-[5px] sm:mt-[5px] w-[20px] h-[20px]' type="checkbox" checked={usesymbol} onChange={()=>{setsymbol(!usesymbol)}} name="" id="" />
          </div>
          <button className='bg-slate-400 border-[2px] text-black text-sm  h-[50px] w-[140px] p-[5px] mb-[20px] sm:mb-[0px]  border-black rounded-lg ' onClick={Generation}>GENERATE PASSWORD</button>
        </div>
      </div>
    </div>
  );
}

export default App;
