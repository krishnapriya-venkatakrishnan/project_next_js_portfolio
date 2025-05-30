import { FloatingNav } from "./ui/FloatingNavBar"

const Navbar = () => {
  
  const navList = [
    {
      name: "projects",
      link: "#projects",
    },
    {
      name: "about",
      link: "#about",
    },
    {
      name: "contact",
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