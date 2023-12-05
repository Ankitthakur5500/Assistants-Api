import OpenAI from "openai";
import { NextResponse } from "next/server"


export const openai = new OpenAI({
    apiKey: "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"
  })

export async function GET(){
const thread = await openai.beta.threads.create();
  return NextResponse.json({ thread})

}
