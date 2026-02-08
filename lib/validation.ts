"use client";

import { z } from "zod";

export const formSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name is too long." })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: "Name can only contain letters, spaces, apostrophes, and hyphens.",
    }),

  email: z.string()
    .min(1, { message: "Email address is required." })
    .email({ message: "Invalid email address." })
    .max(100)
    .regex(/^[^\s<>]+$/, {
      message: "Invalid characters in email.",
    }),

  message: z.string()
    .min(1, { message: "Message is required." })
    .max(1000)
    .refine((val) => !/<[^>]*>/g.test(val), {
      message: "HTML tags are not allowed.",
    }),
});

