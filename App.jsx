import { useState } from 'react'
import img1 from '/src/assets/a.jpg';
import img2 from '/src/assets/b.jpg';
import img3 from '/src/assets/c.jpg';
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

function Header(props){
  return(
    <>
    <div className="">
      <img src={props.src} alt="bookStore" className='min-w-full max-h-24'/>
      <ul className="flex gap-4 text-center flex-wrap justify-center relative bottom-6">
        <li className="text-white font-bold">Home</li>
        <li className="text-white font-bold">About us</li>
        <li className="text-white font-bold">For Sellers</li>
        <li className="text-white font-bold">Read Online</li>
      </ul>
    </div>
    </>
  )
}

function Footer(props){
  return(
    <>
    <div className="flex justify-center flex-wrap flex-col">
        <h3 className="font-bold italic text-yellow-400 text-xl mt-4 flex justify-center">Wanna stay informed on book price and latest release? </h3>
        <h5 className="text-black font-bold flex justify-center mt-4 text-lg ">Subscribe to the NewsLetter</h5>
        <form action="/data" method="post" className='flex justify-center mt-2 flex-wrap'>
          <input type="email" name="email" id="email" className='px-6  py-2 rounded-lg  text-left' placeholder='ByakuyaKuchiki@gmail.com' />
          <button type="submit" className='px-4 py-2 bg-purple-500 text-white font-bold rounded-lg ml-2'>Submit</button>
        </form>

    </div>
    <div className="flex justify-center flex-wrap flex-col">
      <p className="bg-yellow-300 text-slate-500 font-semibold p-2 mt-4">Copyrights are reserved at @rajshekhar.</p>
      <div className="bg-slate-700 px-14 relative right-1.5">
      <p className='text-yellow-300'>Contact Us At</p>
      <ul className="flex flex-nowrap gap-3 relative left-24 bottom-6">
        <li className="text-yellow-300">{props.email}</li>
        <li className="text-yellow-300">{props.phone}</li>
        <li className="text-yellow-300">{props.address}</li>
      </ul>
      </div>
    </div>
    </>
  )
}

function Children({children}){
  return(
    <div className="bg-slate-500">
      <p className="font-bold">what do i think these days.</p>
      {children}
    </div>
  )
}

function ConditionalRender({xl}){
  if(xl){
    return <h1 className="">SENBONZAKURA KAGEYOSHI 🌸🌸</h1>
  }
  return <h1 className="">SCATTER KYOKASUIGETSU 🤯😬</h1>
  // alternativ xl ? <h1 className="">SENBONZAKURA KAGEYOSHI 🌸🌸</h1> :   <h1 className="">SCATTER KYOKASUIGETSU 🤯😬</h1>
}
function NullReturn{
  return null
}

function ListRenderer({list}){
  return(
    
      <ul className="font-bold text-orange-400 bg-white flex justify-center">
        {list.map((item) => <li key = {item}>{item}</li>)}
      </ul>
    
  )
}
function App() {
  
  const value = 1;
  const books = ['thinking fast and slow ' , 'meditation' , 'discourses' , 'how to become a straight a student']
  return(
    <div>
      <ListRenderer list = {books}></ListRenderer>
        <NullReturn></NullReturn>
        <ConditionalRender xl = {true}></ConditionalRender>
        <ConditionalRender xl = {false}></ConditionalRender>

        <Children>
          <h2 className="text-white font-serif">i don't know bro</h2>
          <p className="text-blue-800 font-bold">but there has to be something</p>
        </Children>
        <Header src = {img3}/>
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
        <Footer email = 'rajsheakhar@gmail.com' phone = '+9162633332198' address = 'nearby'/>
    </div>
    
  )

}

export default App
