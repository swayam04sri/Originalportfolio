/*import React from 'react'
import python from "../../src/th (1).jpg"
import mongoDB from "../../src/MongoDB_Logo.jpg"
import express from "../../src/Ex.png"
import react from "../../src/react.png"
import node from "../../src/Node.jpg"

export default function Portfolio() {
    const cardItems=[
        
            {
                id:1,
                logo:express,
                name:"express"
        
                },
                {
                    id:2,
                    logo:react,
                    name:"react"
            
                    },
                    {
                        id:3,
                        logo:node,
                        name:"node"
                
                        },
                        {
                            id:4,
                            logo:mongoDB,
                            name:"mongoDb"
                    
                            },
                            {
                                id:5,
                                logo:python,
                                name:"python"
                        
                                },
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Skilled In Different Domain</span>
        <div className='grid grid-cols-1 md:grid-cols-4 my-5 mx-5 gap-4'>
            {
                cardItems.map(({id,logo,name})=>(
                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-default hover:scale-110 duration-300' key={id}>
                        <img src={logo} className=" w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
                        <div>
                            <div className='font-bold text-xl mb-2'>{name}</div>
                            <p  className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                 <div className='justify-around px-6 py-4 space-x-5'>
                    <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded '>Video</button>
                    <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded '>Source code</button>
                 </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}*/
/*import React from 'react'
import python from "../../src/th (1).jpg"
import mongoDB from "../../src/MongoDB_Logo.jpg"
import express from "../../src/Ex.png"
import react from "../../src/react.png"
import node from "../../src/Node.jpg"
import next from"../../src/next.jpg"

export default function Portfolio() {
    const cardItems=[
        
            {
                id:1,
                logo:express,
                name:"Express.js",
                Description:"Skilled in building RESTful APIs with Express.js for server-side applications."
        
                },
                {
                    id:2,
                    logo:react,
                    name:"React.js",
                    Description:"Proficient in building dynamic and responsive user interfaces with React.js."
                  
            
                    },
                    {
                        id:3,
                        logo:node,
                        name:"Node.js",
                       Description:"Experienced in developing scalable applications using Node.js and its ecosystem."
                
                        },
                        {
                            id:4,
                            logo:mongoDB,
                            name:"MongoDb",
                            Description:"Adept at utilizing MongoDB for flexible and scalable database solutions."
                    
                            },
                            {
                                id:5,
                                logo:python,
                                name:"Python",
                                Description: "Proficient in using Python for data analysis and machine learning projects."
                        
                                },
                                {
                                  id:6,
                                  logo:next,
                                  name:"Next.js",
                                  Description: "Expert in building server-rendered applications using Next.js for optimized performance." 
                                   }
                                
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Skilled In Different Domain</span>
        <div className='grid grid-cols-1 md:grid-cols-4 my-5 mx-5 gap-2'>
            {
                cardItems.map(({id,logo,name})=>(
                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-default hover:scale-110 duration-300' key={id}>
                        <img src={logo} className=" w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
                        <div>
                            <div className='font-bold text-xl mb-2'>{name}</div>
                            <p  className='px-2 text-gray-700'>{Description}</p>
                        </div>
                 
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}*/
import React from 'react';
import python from "../../src/th (1).jpg";
import mongoDB from "../../src/MongoDB_Logo.jpg";
import express from "../../src/Ex.png";
import react from "../../src/react.png";
import node from "../../src/Node.jpg";
import next from "../../src/next.jpg";
import c from "../../src/c.jpg";
import git from "../../src/git.jpg"
export default function Portfolio() {
    const cardItems = [
        {
            id: 1,
            logo: express,
            name: "Express.js",
            description: "Skilled in building RESTful APIs with Express.js for server-side applications."
        },
        {
            id: 2,
            logo: react,
            name: "React.js",
            description: "Proficient in building dynamic and responsive user interfaces with React.js."
        },
        {
            id: 3,
            logo: node,
            name: "Node.js",
            description: "Experienced in developing scalable applications using Node.js and its ecosystem."
        },
        {
            id: 4,
            logo: mongoDB,
            name: "MongoDB",
            description: "Adept at utilizing MongoDB for flexible and scalable database solutions."
        },
        {
            id: 5,
            logo: python,
            name: "Python",
            description: "Proficient in using Python for data analysis and machine learning projects."
        },
        {
            id: 6,
            logo: next,
            name: "Next.js",
            description: "Expert in building server-rendered applications using Next.js for optimized performance."
        },
        {
          id: 7,
          logo: c,
          name: "C++",
          description: "Adept at using C++ for implementing algorithms and data structures."
        },
        {
          id: 8,
          logo: git,
          name: "Git version",
          description:"strong command of Git's features and functionalities"
        }
    ];

    return (
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline font-semibold'>Skilled In Different Domains</span>
                <div className='grid grid-cols-1 md:grid-cols-4 my-4 mx-5 gap-2'>
                    {
                        cardItems.map(({ id, logo, name, description }) => (
                            <div className='md:w-[220px] md:h-[220px] border-[2px] rounded-lg shadow-lg p-1 cursor-default hover:scale-110 duration-300' key={id}>
                                <img src={logo} className="w-[80px] h-[80px] p-1 rounded-full border-[2px]" alt={`${name} logo`} />
                                <div>
                                    <div className='font-bold text-xl mb-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
