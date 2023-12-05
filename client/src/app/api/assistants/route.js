import OpenAI from "openai";
import { NextResponse } from "next/server"


export const openai = new OpenAI({
    apiKey: "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"
  })

export async function GET(){
const assistant = await openai.beta.assistants.create({
    name: "Math Tutor",
    instructions: "You are a personal math tutor. Write and run code to answer math questions.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5-turbo-16k"
  });
  return NextResponse.json({ assistant})

}
