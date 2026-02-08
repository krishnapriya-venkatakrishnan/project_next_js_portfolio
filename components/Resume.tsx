"use client";

import { useToast } from "@/hooks/useToast";
import { IconDownload } from "@tabler/icons-react";

const Resume = () => {
  const { toast } = useToast();
  const downloadResume = () => {
    toast({
      title: "Downloaded!",
      description: "Resume downloaded",
    });
  }
  return (
    <div className="w-full flex items-center justify-end absolute top-3 right-8">
      <a href="/Krishnapriya_Venkatakrishnan_Resume.pdf" 
      download 
      onClick={downloadResume}
      className="mt-4 cursor-pointer flex items-center gap-1 font-medium text-[12px]"
      >
        <IconDownload className="cursor-pointer size-3 mb-[3px]" /> RESUME
      </a>
    </div>
  );
}

export default Resume