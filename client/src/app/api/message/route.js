import OpenAI from "openai";
import { NextResponse } from "next/server"


export const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
})

export async function POST(request) {
    // console.log("messageroute.js-->1request",await request);
    const data  = await request.json();
    // console.log("-->data1",data.threadId);
    // console.log("-->data2",data.message);
    const threadId = data.threadId;
    const message = data.message;
    // console.log("messageroute.js-->",threadId,"-->",message);

    const threadMessages = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    })
  
    // console.log("POST MESSAGE", threadMessages)
    // console.log("-->content", threadMessages.content);
   
    return NextResponse.json(threadMessages);
  }