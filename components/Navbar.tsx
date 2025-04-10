import { FloatingNav } from "./ui/FloatingNavBar"

const Navbar = () => {
  
  const navList = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    }
  ]
  
  return (
    <FloatingNav
    navItems={navList}
    className="dark:bg-black"
    />
  )
}

export default Navbar