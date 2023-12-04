"use client"
import { useState } from 'react'

export default function Home() {
  const [data,setData] = useState("");
  console.log(data);
  return (
  <div className='container'>
    <div className='sidebar'>
      <div className='assistants'>Assistants</div>
    </div>
    <div className='messagebody'>
      <div className='user'>Hello</div>
      {/* <div className='user'>Hello,How are you?</div>
      <div className='bot'>I am fine</div> */}
      <input className='input' style={{fontSize:"15px"}} type="text" onChange={(event)=>setData(event.target.value)}></input>
      <button className='btn'>Send</button>
    </div>
    <div className='rightbar'></div>
  </div>
  )
}
