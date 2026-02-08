"use client";

import { createContext, ReactNode, useContext, useState } from "react";

// 1. Define the type
type ProjectContextType = {
  title?: string;
  description?: string;
  stack?: string[];
  deployedLink?: string;
  showPopUp: boolean;
  togglePopUp: () => void;
  setProjectDetails: (title: string, description: string, stack: string[], deployedLink: string) => void;
};

// 2. Create the context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// 3. Create the provider
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stack, setStack] = useState<string[]>([]);
  const [deployedLink, setDeployedLink] = useState("");

  const togglePopUp = () => {
    setShowPopUp((prev) => !prev);
  };

  const setProjectDetails = (title: string, description: string, stack: string[], deployedLink: string) => {
    setTitle(title);
    setDescription(description);
    setStack(stack);
    setDeployedLink(deployedLink)
  };
  
  return (
    <ProjectContext.Provider value={{ title, description, stack, deployedLink, showPopUp, togglePopUp, setProjectDetails }}>
      {children}
    </ProjectContext.Provider>
  );
};

// 4. Create a custom hook (cleaner usage)
export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within ProjectProvider");
  }
  return context;
};
