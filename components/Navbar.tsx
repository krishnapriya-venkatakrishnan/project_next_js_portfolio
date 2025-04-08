import { FloatingNav } from "./ui/FloatingNavBar"

const Navbar = () => {
  
  const navList = [
    {
      name: "About",
      link: "#"
    },
    {
      name: "Projects",
      link: "#"
    },
    {
      name: "References",
      link: "#"
    },
    {
      name: "Contact",
      link: "#"
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