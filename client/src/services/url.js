
const baseurl = "http://localhost:3000"


export const GetAssistant = async () => {
    try {
      const response = await fetch(`${baseurl}/api/assistants`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      if (!response.ok) {
        console.error("Failed to get assistant")
      }
      const data = await response.json()
      console.log("Assistant retrieved successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  }

  export const GetThread = async () => {
    try {
      const response = await fetch(`${baseurl}/api/threads`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      if (!response.ok) {
        console.error("Failed to get assistant")
      }
      const data = await response.json()
      console.log("Thread retrieved successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  } 

  export const CreateMessage = async (threadId,data1) => {
    try {
      const response = await fetch(`${baseurl}/api/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: data1,threadId: threadId}),
      })
      if (!response.ok) {
        console.error("Failed to get assistant")
      }
      const data = await response.json()
      console.log("Message retrieved successfully")
      return data
    } catch (error) {
      console.error(`ERROR occurred: ${error}`)
    }
  } 