import OpenAI from "openai";
const openai = new OpenAI({apiKey:"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"});

// const assistant = await openai.beta.assistants.create({
//     name: "Math Tutor",
//     instructions:
//         "You are a personal math tutor. Write and run code to answer math questions.",
//     tools: [{ type: "code_interpreter" }],
//     model: "gpt-3.5-turbo-16k",
// });

//  console.log(assistant);

// const thread = await openai.beta.threads.create();

// console.log(thread);

// const message = await openai.beta.threads.messages.create(thread.id, {
//     role: "user",
//     content: "what is 2+2=?",
// });

// console.log(message);
// console.log(message.content);

// const run = await openai.beta.threads.runs.create(thread.id, {
//     assistant_id: assistant.id,
//     instructions: "Please address the user as Jane Doe. The user has a premium account.",    
// });

// console.log(run);
// console.log(run.status);

const checkStatusAndPrintMessages = async (threadId, runId) => {
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    if(runStatus.status === "completed"){
        let messages = await openai.beta.threads.messages.list(threadId);
        messages.data.forEach((msg) => {
            const role = msg.role;
            const content = msg.content[0].text.value; 
            console.log(
                `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`
            );
        });
    } else {
        console.log("Run is not completed yet.");
    }  
};

setTimeout(() => {
    checkStatusAndPrintMessages(thread.id, run.id)
}, 50000 );

