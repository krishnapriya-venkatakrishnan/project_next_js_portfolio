"use client"

import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2, {message: "Username must be at least 2 characters."}),
  email: z.string().email().min(1, {message: "Email address is required"}),
  message: z.string().min(1, {message: "Message is required"}),
});
