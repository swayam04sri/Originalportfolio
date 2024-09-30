import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import pic from "../../src/new.jpg";
import { SiHiveBlockchain } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";



//import pic from "../../src/photopf.avif";



export default function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'> Welcome to my portfolio ! Explore my work and see my passion come to life.</span><br/>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello , I'm a </h1><br/>
                            <ReactTyped
                               className='text-gray-800 font-bold'
                                strings={["Developer", "Programmer"]}
                                typeSpeed={40}
                                backSpeed={50}
                            />
                        </div>
                    
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className='text-sm md:text-md text-justify '>
                    I am a passionate Computer Science student with a strong foundation in software development, algorithms, and data structures. I have hands-on experience with multiple programming languages, including Python, C++, JavaScript, and specialize in building web applications using modern technologies like React.js, Next.js, and Vite. My academic background, combined with practical project experience, has honed my problem-solving skills and understanding of full-stack development..</p>
                    <br />
                    <br />
                    <div className='flex flex-col  items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-center'>Available on</h1>
                            <ul className='flex space-x-5'>
                            <li><a href='https://www.facebook.com/profile.php?id=100055570572223&mibextid=ZbWKwL' target='_blank'>  
                             <FaSquareFacebook className='text-2xl cursor-pointer' /></a>
                             </li>
                             <li><a href='https://www.linkedin.com/in/swayam-srivastava-b9aaa3228' target='_blank'><FaLinkedin className='text-2xl cursor-pointer' /></a></li>
                             <li><a href='https://github.com/swayam04sri' target='_blank'> <FaGithub className='text-2xl cursor-pointer' /></a></li>
                             <li>   <a href='https://www.instagram.com/here_ansh_/' target='_blank'> <FaInstagramSquare className='text-2xl cursor-pointer' /></a></li>
                            </ul>
                            
                        </div>
                        <div className='space-y-2' >
                            <h1 className='font-bold'>Currently working on</h1>
                            <ul className='flex space-x-5'>
                                <li><SiMongodb className='text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </li>
                                <li><SiHiveBlockchain className='text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                <li><TbBrandMysql  className='text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/></li>
                                <li> <RiNextjsFill className='text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
                            </ul>
                       </div>
                    </div>
                    </div>
                
                <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                <img src={pic} className='rounded-full md:h-[450px] md:w-[450px] ' alt="" srcset="" /></div>
                </div>
                </div>
                <hr />
            
        </>
    )
}
