import { MdDownload, MdHome, MdOutlineApps, MdPerson, MdSchool, MdWork } from "react-icons/md"
import { SiBookstack } from "react-icons/si"
import { FloatingNav } from "./ui/FloatingNavBar"

const Navbar = () => {
  
  const navList = [
    {
      name: "home",
      link: "#home",
      icon: <MdHome className="size-5" />,
    },
    {
      name: "projects",
      link: "#projects",
      icon: <MdOutlineApps className="size-5" />,
    },
    {
      name: "stack",
      link: "#stack",
      icon: <SiBookstack className="size-5" />,
    },
    {
      name: "experience",
      link: "#experience",
      icon: <MdWork className="size-5" />,
    },
    {
      name: "education",
      link: "#education",
      icon: <MdSchool className="size-5" />,
    },
    {
      name: "contact",
      link: "#contact",
      icon: <MdPerson className="size-5" />,
    },
    {
      name: "resume",
      link: "/Krishnapriya_Venkatakrishnan_Resume.pdf",
      icon: <MdDownload className="size-5" />,
    }
  ]
  
  return (
    <FloatingNav
    navItems={navList}
    className=""
    />
  )
}

export default Navbar