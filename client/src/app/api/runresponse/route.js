import OpenAI from "openai";
import { NextResponse } from "next/server";

// export const openai = new OpenAI({
//     apiKey: "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"
//   });

  export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
  })

  export async function POST(request) {
    // console.log("runresponse.js-->1request",await request);
    const data  = await request.json();
    // console.log("-->data1",data);
    const threadId = data.ThreadId;
    const runId = data.runId;
    // console.log("messageroute.js-->",threadId,"-->",runId);
    
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    // const data2 = await runStatus.json();
    // console.log("hellobefore-->",data2);
    setTimeout(()=>{runresponse(runStatus)},200000);
    console.log("helloafter-->");         
  
  return NextResponse.json(runStatus);
}  

function runresponse(runStatus){
    // const ankit =  runStatus;
    // const data = ankit.json();
    console.log("data->",runStatus);
    console.log("rusresponse");
    // return "Thakur";
}
// const runresponse = (async (runStatus)=>{
//     console.log("runresponse--1>",runStatus);
    // if(runStatus.status === "completed"){
    //     let messages = await openai.beta.threads.messages.list(threadId);
    //     console.log("runresponse-->2",messages);
    //     // messages.data.forEach((msg) => {
    //     //     const role = msg.role;
    //     //     const content = msg.content[0].text.value; 
    //     //     console.log(
    //     //         `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`
    //     //     );
    //     // });
    // } else {
    //     console.log("Run is not completed yet.");
    // } 
// });
