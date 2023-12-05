"use client"
import { useState } from 'react'
import {GetAssistant,GetThread,CreateMessage} from '../services/url'
 
export default function Home() {
  const [data,setData] = useState("");
  console.log(data);

  async function handleClick(){
    const assistantId = await GetAssistant();
    console.log("*",assistantId.assistant.id);
    const threadId = await GetThread();
    // console.log("*",threadId.thread.id);
    const id = threadId.thread.id
    console.log("*",id);
    const message = await CreateMessage(id,data);
    console.log("*",message);
  }

  return (
  <div className='container'>
    <div className='sidebar'>
      <div className='assistants'>Assistant</div>
      <div className='assistants2'>Assistant 1</div>
      <div className='assistants2'>Assistant 2</div>
      <div className='assistants2'>Assistant 3</div>
    </div>
    <div className='messagebody'>
      <div className='user'>Hello</div>
      {/* <div className='user'>Hello,How are you?</div>
      <div className='bot'>I am fine</div> */}
      <input className='input' style={{fontSize:"15px"}} type="text" onChange={(event)=>setData(event.target.value)}></input>
      <button className='btn' onClick={handleClick}>Search</button>
    </div>
    <div className='rightbar'></div>
  </div>
  )
}
