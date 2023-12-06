import OpenAI from "openai";
import { NextResponse } from "next/server"


// export const openai = new OpenAI({
//     apiKey: "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"
//   })

export const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY
})  


export async function GET(){
const thread = await openai.beta.threads.create();
  return NextResponse.json({ thread})

}
