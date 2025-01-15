import { useState } from 'react'
import img1 from '/src/assets/a.jpg';
import img2 from '/src/assets/b.jpg'
import './App.css'

function Photo1(){
  return(
    <div className="flex justify-center bg-slate-400">
      
      <img src= {img1} alt="spiderman" className=' border-black p-4 border-4 ' />
    </div>
  )
}
const Photo2 = ()=>{
  return(
        <div className="flex justify-center bg-gradient-to-tr from-blue-500 to bg-purple-500">
             <img src={img2} alt="human psyche"  />
        </div>
  )
  
}

function App() {
  const value = 1;
  return(
    <div>
        <div className="">
        </div>
        <h1 className='font-bold underline bg-slate-400 text-xl flex justify-center mb-10 p-8'>Welcome to our Book Store .</h1>
        <ul>
          <li className="text-white font-bold text-xl flex justify-center my-2">Thus spoke Zarathustra</li>
          <Photo1/>
          <li className='text-purple-500 font-bold text-xl flex justify-center my-10'>laws of human nature</li>
          <Photo2/>
        </ul>
        <div className="flex justify-center">
            <button className=" font-bold p-4 text-white hover:text-orange-500 mt-5 rounded-xl px-14 bg-orange-500 hover:bg-white  transition duration-500">Buy Now</button>
        </div>
    </div>
    
  )

}

export default App
