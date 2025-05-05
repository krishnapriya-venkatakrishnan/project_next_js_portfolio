"use client"

import { formSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "./ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea"
import { useState } from "react";
import { sendMail } from "@/lib/actions/send.action"
import { useToast } from "@/hooks/useToast"
import ContactLinks from "./ContactLinks"

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export function ContactForm() {
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const {name, email, message} = values;

    setLoading(true);
    const {data, error} = await sendMail(name, email, message);
    
    if (data) {
      
      toast({
        title: "Mail sent",
        description: "Thanks for contacting me!"
      });

      form.reset();
      setLoading(false);
      return
    } 
    
    if (error) {
      
      toast({
        title: "Mail not sent",
        description: `Error happened- ${error}`,
        variant: "destructive",
      });

      form.reset();
      setLoading(false);
      return
    }

  }

  return (
    <section id="contact" className="mx-auto max-w-5xl lg:w-[50dvw] dark:bg-black">
      <div className="mx-auto w-full rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">

      <h2 className="mt-5 mb-0 h-[10dvh] font-bold tracking-[0.125rem] text-center text-[1.75rem] lg:text-[3rem] 2xl:text-[4rem]">contact.</h2>
      <ContactLinks />
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-lg:space-y-4 space-y-8 shadow-input p-4 w-full flex flex-col 2xl:gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="max-lg:text-[0.9rem]">Your Name</FormLabel>
                <FormControl>
                  <Input className="max-lg:text-[0.9rem] 2xl:py-8" placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="max-lg:text-[0.9rem]">Your Email Address</FormLabel>
                <FormControl>
                  <Input className="max-lg:text-[0.9rem] 2xl:py-8" placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel className="max-lg:text-[0.9rem]">Your Message</FormLabel>
                <FormControl>
                  <Textarea className="max-lg:text-[0.9rem] 2xl:py-8" placeholder="Enter your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit"
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] my-2 cursor-pointer !font-space-grotesk 2xl:text-[1.5rem] 2xl:h-20"
          >
            {loading ? "Sending..." : "Send"}
            <BottomGradient />
          </Button>
          
        </form>
      </Form>

      </div>
      
    </section>
  );
}