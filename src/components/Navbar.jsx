import React, { useState } from 'react'
//import pic from "../../src/photopf.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';
import pic from "../../src/Ansh.jpg";
function Navbar() {

  const [menu, setMenu] = useState(false)
  const navitems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Portfolio"
    },
    {
      id: 4,
      text: "Experience"
    },
    {
      id: 5,
      text: "Contact"
    },]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-5 bg-slate-200'>
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
          <img src={pic} className='h-12 w-12 rounded-full' alt='' />
          <h1 className='font-semibold text-2xl cursor-pointer text-black'>Swayam <span className='text-black text-2xl'>Srivastava</span>
            <p className='text-sm'>Web developer</p></h1>
        </div>
        <div>
          <ul className='hidden md:flex space-x-8'>
            {
              navitems.map(({ id, text }) => (
                <li className=" hover:scale-105 duration-75 cursor-pointer" key={id}>
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active">
                  {text}
                  </Link></li>
              ))
            }
          </ul>
          <div onClick={() => setMenu(!menu)} className='md:hidden'>{menu ? <IoClose size={24} /> : < AiOutlineMenu size={24} />}</div>
        </div>
      </div>
      {menu && (

        <div className='bg-white'>
          <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
            {
              navitems.map(({ id, text }) => (
                <li className=" hover:scale-105 duration-195 font-semibold cursor-pointer" key={id}>
                   <Link 
                   onClick={() => setMenu(!menu)}
                   to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active">
                  {text}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      )


      }

    </div>
  )
}

export default Navbar
