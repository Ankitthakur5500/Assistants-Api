import OpenAI from "openai";
import { NextResponse } from "next/server"


  export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
  })

export async function POST(request) {
    // console.log("runroute.js-->1request",await request);
    const data  = await request.json();
    // console.log("-->data1",data);
    const AssistantId = data.AssistantId.assistant.id;
    const threadId = data.ThreadId;
    // console.log("-->data2",threadId,AssistantId);

    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: AssistantId,
        instructions: "Please address the user as Jane Doe. The user has a premium account.",    
    });
  
    // console.log("POST MESSAGE", threadMessages)
    // return NextResponse.json({ threadMessages })
    // console.log("-->content", threadMessages.content);
   
    // return NextResponse.json(threadMessages);
    
        return NextResponse.json(run);
  }