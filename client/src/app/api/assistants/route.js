import OpenAI from "openai";
import { NextResponse } from "next/server"


// export const openai = new OpenAI({
//     apiKey: "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"
//   })
  export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
  })


export async function GET(){
const assistant = await openai.beta.assistants.create({
    name: "Friday",
    instructions: "You are a personal math tutor. Write and run code to answer math questions.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5-turbo-16k"
  });
  return NextResponse.json({ assistant})
}
