// use list to offer books on different genres 
import { useState } from 'react'
import img1 from '/src/assets/a.jpg';
import img2 from '/src/assets/b.jpg';
import img3 from '/src/assets/c.jpg';
import img4 from '/src/assets/d.jpg';
import img5 from '/src/assets/e.jpg';
import img6 from '/src/assets/download.jpg';
import './App.css'
import {memo} from 'react'


// optimization of react.memo allows you to skip re-rendering when the props haven't changed when the parent component
// re renders2
// when a component rerenders all of its child components also re renders
// so the point of using memo is when a user is allowed to change its name the components that uses that name will re-render once the
// name has been saved in components using the parental name value.
// so can memo be used in dark-light mode switch , like if button is clicked the state changes of parent and if state of parent is changed stored in props
// lead to change the display of child components? 
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
// this would be used primarily in case when content is asked such as filter by date , author or publication so keep in check.
const memoizedComponent = memo(
  function component(){} , (prevProps , nextProps)=>{
    // returns true or false
  }
)
const Frame = ({sale,children})=>{
  return( 
  <div className="">
      <h1 className="italic font-semibold m-4">Released on {`${(new Date).getDay()} / ${(new Date).getMonth()+1} / ${(new Date).getFullYear()}`}</h1>
       {sale ? <p className='text-red-600 bg-white font-bold w-502 m-2 animate-pulse'>Special discount : 60% off </p>: 
       <p className='underline animate-pulse font-bold text-purple-700 relative left-9 bottom-2 '> ONLY FEW LEFT</p>}
       {children}
       <button className=" bg-amber-600 text-white font-bold rounded-sm p-2 relative left-10 mt-5">Buy Now</button>
  </div> )
}

function Genres({items}){
  
  return(
    <div className="">
      <h4 className="italic text-lg font-semibold text-blue-700 ml-3 underline">Or Select a Genre of Your Choice</h4>
      <ul className="flex justify-center gap-6 from-neutral-800 p-2 mt-4 ">
    {
      // reason why built in index won't work is in case there are 2 list to be created and key is an index now react
      // can't differentiate between index 0 of list 1 and index 0 of list 2 so , index shouldn't be use and prefer name
      // like later.
      items.map((item)=> <li key = {item.key} className='opacity-100 transition-opacity font-serif hover:opacity-60 '>{item.toUpperCase()}</li>)
    }
    </ul>
    </div>
    
  )
}
// 

// function ListRenderer({list}){
//   return(
    
//       <ul className="font-bold text-orange-400 bg-white flex justify-center">
//         {list.map((item) => <li key = {item}>{item}</li>)}
//       </ul>
    
//   )
// }
function App() {
  
  // const value = 1;
  // const books = ['thinking fast and slow ' , 'meditation' , 'discourses' , 'how to become a straight a student']
  const genres = ['romance' , 'sci-fi' , 'motivation' , 'self-improvement' , 'money and wealth' , 'health and fitness' , 'finance and marketting']
  return(
    <div>
      
      {/* <ListRenderer list = {books}></ListRenderer>
        <NullReturn></NullReturn>
        <ConditionalRender xl = {true}></ConditionalRender>
        <ConditionalRender xl = {false}></ConditionalRender> */}
{/* 
         <Children>
          <h2 className="text-white font-serif">i don't know bro</h2>
          <p className="text-blue-800 font-bold">but there has to be something</p>
        </Children>  */}
        
        <Header src = {img3}/>
        <h1 className='font-bold underline bg-slate-400 text-xl flex justify-center mb-10 p-8'>Welcome to our Book Store .</h1>
        <div className="flex justify-center">
          <h3 className="text-2xl font-bold text-purple-900 mb-4 animate-bounce">Our Top Sellers: </h3>
        </div>
        <ul>
          <li className="text-white font-bold text-xl flex justify-center my-2">Thus spoke Zarathustra</li>
          <Photo1/>
          <div className="flex justify-center">
            <button className=" font-bold p-4 text-white hover:text-orange-500 mt-5 rounded-xl px-14 bg-orange-500 hover:bg-white  transition duration-500">Buy Now</button>
        </div>
          <li className='text-purple-500 font-bold text-xl flex justify-center my-10'>laws of human nature</li>
          <Photo2/>
          <div className="flex justify-center">
            <button className=" font-bold p-4 text-white hover:text-orange-500 mt-5 rounded-xl px-14 bg-orange-500 hover:bg-white  transition duration-500">Buy Now</button>
        </div>
          <Genres items = {genres}></Genres>
          <div className="p-4 flex justify-center  bg-blue-300 my-6">
            <h3 className="font-bold text-black text-2xl underline min-w-max ">OUR LATEST RELEASE</h3>
          </div>
          <div className=" flex justify-evenly gap-20 ">
          <Frame sale = {true}>
          <img src={img4} alt="" />
          </Frame>
          <Frame sale = {false}>
          <img src={img5} alt="" className=''/>
          </Frame>
          <Frame sale = {true}>
          <img src={img6} alt="" className = 'relative left-3'/>
          </Frame>
          </div>
          
        </ul>
        
        <Footer email = 'rajsheakhar@gmail.com' phone = '+9162633332198' address = 'nearby'/>
    </div>
    
  )

}

export default App
