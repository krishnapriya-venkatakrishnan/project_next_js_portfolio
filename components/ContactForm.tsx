"use client"

import { formSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useToast } from "@/hooks/useToast"
import { sendMail } from "@/lib/actions/send.action"

import { Copy } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/Button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/TextArea"

export function ContactForm() {
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Copied!",
          description: text,
          variant: "default",
        });
      })
      .catch((err) => {
        toast({
          title: "Error!",
          description: `Error while copying ${text}: ${err}`
        });
      });
  }
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

  const downloadResume = () => {
    toast({
      title: "Downloaded!",
      description: "Resume downloaded",
    });
  }

  return (
    <section id="contact" className="pb-10 w-full max-w-5xl mx-auto">
      <div className="w-full rounded-none  md:rounded-2xl">
        <h3 className="font-bold tracking-wide">CONTACT</h3>
        <div className="flex flex-col gap-1 mt-1">
          <p className="cursor-pointer flex gap-2 items-center" >krishnapriyavenkatakrishnan@gmail.com <Copy className="size-4" onClick={() => copyText("krishnapriyavenkatakrishnan@gmail.com")} /> </p>
          <p className="cursor-pointer flex gap-2 items-center" >+46 736595250 <Copy className="size-4" onClick={() => copyText("+46 736595250")} /></p>
          <div className="flex items-center gap-1">
          <Link
            href="https://github.com/krishnapriya-venkatakrishnan?tab=repositories"
            target="_blank"
            className="underline"
          >
            GitHub
          </Link>|
          <Link
            href="https://www.linkedin.com/in/krishnapriya-venkatakrishnan-891b4819a/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </Link> |
          <a
              key={`resume`}
              href="/Krishnapriya_Venkatakrishnan_Resume.pdf"
              download
              className="underline"
              onClick={downloadResume}
            >Resume</a>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-lg:space-y-4 space-y-8 mt-4 max-w-2xl flex flex-col text-[#F6F4F0]">
            <div className="flex items-center max-md:flex-col gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 w-full md:w-1/2">
                  <FormLabel className="text-[#FFD1DC]">Your Name</FormLabel>
                  <FormControl>
                    <Input required className="max-lg:text-[0.9rem]" placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 w-full md:w-1/2">
                  <FormLabel className="text-[#FFD1DC]">Your Email Address</FormLabel>
                  <FormControl>
                    <Input required className="max-lg:text-[0.9rem]" placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel className="text-[#FFD1DC]">Your Message</FormLabel>
                  <FormControl>
                    <Textarea required className="max-lg:text-[0.9rem]" placeholder="Enter your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit"
            className="relative w-[200px] h-10 rounded-md font-medium bg-white  my-2 cursor-pointer font-figTree uppercase border text-[#A55166]"
            >
              {loading ? "Sending Message..." : "Send Message"}
            </Button>
            
          </form>
        </Form>
      </div>
      
    </section>
  );
}