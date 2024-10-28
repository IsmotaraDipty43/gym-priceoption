
import { useState } from "react";
import Link from "./Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
const Navber = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" },
      ]; 
      const [open,setOpen] =useState(false);
    return (
        <div className="p-6 bg-blue-500 text-3xl font-bold text-black">
           <div className='md:hidden' onClick={()=>setOpen(!open)}>
            {
                open === true ? <IoMdCloseCircle className="text-3xl"/> :  <HiMenuAlt1  className="text-3xl"/>
            }
    
           </div>
           <ul className={`md:flex gap-24 absolute md:static bg-blue-500 text-lg rounded-lg px-6 duration-1000 ${open ? 'top-16' :'-top-60'}`}>
          {routes.map(route=><Link key={route.id} route={route}></Link>)}
           </ul>
        </div>
    );
};

export default Navber;