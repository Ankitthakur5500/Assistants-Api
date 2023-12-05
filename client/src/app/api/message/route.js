import OpenAI from "openai";
import { NextResponse } from "next/server"

export const openai = new OpenAI({
    apiKey: "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"
  })

// const message = await openai.beta.threads.messages.create(thread.id, {
//     role: "user",
//     content: "what is 2+2=?",
// });

// export async function POST(request, params) {
//     const { message } = await request.json()
//     const threadId = params.params.threadId
//     const threadMessages = await openai.beta.threads.messages.create(threadId, {
//       role: "user",
//       content: message,
//     })
  
//     console.log("POST MESSAGE", threadMessages)
//     return NextResponse.json({ threadMessages })
//   }

export async function POST(request, params) {
    const { message } = await request.json()
    const { threadId } = await request.json()
    console.log("Hello1",{message});
    console.log("Hello2",{threadId});
    // const threadId = params.params.threadId
    const threadMessages = await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: message,
    })
  
    // console.log("POST MESSAGE", threadMessages)
    return NextResponse.json({ threadMessages })
  }