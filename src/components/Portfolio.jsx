import React from 'react'
import spotifyClone from "../../public/spotify-clone.png"
import googleClone from "../../public/google-clone.png"
import passwordGenerator from "../../public/password_generator.png"
import todo from "../../public/todo.png"

const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo:spotifyClone,
            title:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            name:"Spotify Clone",
            github:"https://github.com/Wasim6205/Spotify-Clone",
            live:"https://spotify-clone-eta-mauve.vercel.app/"
        },
        {
            id: 2,
            logo:googleClone,
            title:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            name:"Google Search Clone",
            github:"https://github.com/Wasim6205/Spotify-Clone",
            live:"https://wasim-google-search-clone.netlify.app/"
        },
        {
            id: 3,
            logo:passwordGenerator,
            title:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            name:"Password Generator",
            github:"https://github.com/Wasim6205/passwordGenerator",
            live:"https://password-generator-dusky-mu.vercel.app/"
        },
        {
            id: 4,
            logo:todo,
            title:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            name:"Todo App",
            github:"https://github.com/Wasim6205/todoApp",
            live:"https://todo-app-ten-silk-64.vercel.app/"
        },
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
                {
                    cardItem.map(({id,logo,title,name,github,live}) => (
                        <div key={id} className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                            <img src={logo} className='w-full p-1 border-[2px]' alt="" />
                            <div>
                                <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                                <p className='px-2 text-gray-700'>{title}</p>
                            </div>
                            <div className='flex justify-around py-4'>
                                <a href={github} target='_blank'><button className='bg-blue-500 hover:bg-blue-700 text-white font-medium text-md px-3 py-1 rounded'>Source Code</button></a>
                                <a href={live} target='_blank'><button className='bg-green-500 hover:bg-green-700 text-white font-medium text-md px-3 py-1 rounded'>Live Demo</button></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio