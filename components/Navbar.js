import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white flex justify-between px-4 items-center h-13">
        <div className="logo font-bold text-lg">GetMeaChai</div>
        <ul className="flex justify-between gap-4">
            <li>Home</li>
            <li>About</li>  
            <li>Projects</li>
            <li>Login</li>
            <li>Sign Up</li>
        </ul>
        </nav>
  )
}

export default Navbar
