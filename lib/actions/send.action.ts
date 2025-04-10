"use server";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export async function sendMail( name:string, email:string, message: string) {

  try {
// pass the form data to the resend api in the backend.
    const response = await fetch(`${API_BASE_URL}/send`, {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
      
    const data = await response.json();
    return {data: data};
  } catch (error) {
    console.log(error);
    return {error: error};
  }
}