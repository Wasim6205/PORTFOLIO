import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import react from "../../public/reactjs.png"
import nodejs from "../../public/node.png"
import mongodb from "../../public/mongodb.jpg"
import expressjs from "../../public/express.png"

const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo:html,
            name:"HTML"
        },
        {
            id: 2,
            logo:css,
            name:"CSS"
        },
        {
            id: 3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id: 4,
            logo:react,
            name:"React Js"
        },
        {
            id: 5,
            logo:nodejs,
            name:"Node Js"
        },
        {
            id: 6,
            logo:mongodb,
            name:"Mongodb"
        },
        {
            id: 7,
            logo:expressjs,
            name:"Express Js"
        },
    ]
  return (
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p>I've more than 1 year of experiance in below technologies.</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                {
                    cardItem.map(({id,logo,name}) => (
                        <div key={id} className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-2 cursor-pointer hover:scale-110 duration-300'>
                            <img src={logo} className='md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full' alt="" />
                            <div>
                                <div>{name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience