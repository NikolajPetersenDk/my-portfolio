import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const navlinkClass = `inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 `

export default function Navbar() {
  return (
    <header className="bg-red-600">
       <div className="container mx-auto flex justify-between">
          <nav className="flex">
               <NavLink 
                  to="/" 
                  className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
               >
                  Home
               </NavLink>

               <NavLink 
                  to="/post"
                  className={(navData) => navData.isActive ? `text-red-100 bg-red-700 ${navlinkClass}` : `${navlinkClass}`}
               >
                  Blog Posts
               </NavLink>
               
               <NavLink 
                  to="/project"
                  className={(navData) => navData.isActive ? `text-red-100 bg-red-700 ${navlinkClass}` : `${navlinkClass}`}               >
                  Projects
               </NavLink>
               
               <NavLink 
                  to="/about"
                  className={(navData) => navData.isActive ? `text-red-100 bg-red-700 ${navlinkClass}` : `${navlinkClass}`}               >
                  About
               </NavLink>

          </nav>
          <div className="inline-flex pd-3 px-3 my-auto">
            <SocialIcon 
               url="https://www.facebook.com/Nikofisk" 
               className="mr-4" 
               target="_blank" 
               fgColor="white" 
               style={{height:35, width: 35}} 
            />
            <SocialIcon 
               url="https://www.youtube.com/channel/UC2ycKwRnAI_RHQxm_T0g-PA" 
               className="mr-4" 
               target="_blank" 
               fgColor="white" 
               style={{height:35, width: 35}} 
            />
            <SocialIcon 
               url="https://www.linkedin.com/in/nikofisk/" 
               className="mr-4" 
               target="_blank" 
               fgColor="white" 
               style={{height:35, width: 35}} 
            />

          </div>
       </div>
    </header>
  )
}