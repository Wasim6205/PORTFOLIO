import React from 'react'
import spotifyClone from "../../public/spotify-clone.png"
import googleClone from "../../public/google-clone.png"
import passwordGenerator from "../../public/password_generator.png"
import todo from "../../public/todo.png"
import blogApp from "../../public/blogApp.png"

const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo:spotifyClone,
            name:"Spotify Clone",
            desc:"Developed a Spotify clone using ReactJS, Tailwind CSS, and Context API, providing seamless music streaming and intuitive user experience.",
            github:"https://github.com/Wasim6205/Spotify-Clone",
            live:"https://spotify-clone-eta-mauve.vercel.app/"
        },
        {
            id: 2,
            logo:googleClone,
            name:"Google Search Clone",
            desc:"Built a Google search clone with ReactJS and Tailwind CSS, leveraging RapidAPI for data retrieval, delivering fast and responsive search functionality.",
            github:"https://github.com/Wasim6205/Spotify-Clone",
            live:"https://wasim-google-search-clone.netlify.app/"
        },
        {
            id: 3,
            logo:passwordGenerator,
            name:"Password Generator",
            desc:"Developed a simple password generator using ReactJS and Tailwind CSS, ensuring secure and customizable password creation.",
            github:"https://github.com/Wasim6205/passwordGenerator",
            live:"https://password-generator-dusky-mu.vercel.app/"
        },
        {
            id: 4,
            logo:todo,
            name:"Todo App",
            desc:"Built a todo app with ReactJS, Tailwind CSS, and Context API, providing efficient task management and a responsive user interface.",
            github:"https://github.com/Wasim6205/todoApp",
            live:"https://todo-app-ten-silk-64.vercel.app/"
        },
        {
            id: 5,
            logo:blogApp,
            name:"Blog Context App",
            desc:"Developed a blog context app with ReactJS, Tailwind CSS, Context API, useSearchParams, and useLocation hooks for dynamic content management",
            github:"https://github.com/Wasim6205/BlogContext",
            live:"https://blog-context-two.vercel.app/"
        },
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
                {
                    cardItem.map(({id,logo,name,desc,github,live}) => (
                        <div key={id} className='md:w-[300px] md:mb-16 md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
                            <img src={logo} className='w-full p-1 border-[2px]' alt="" />
                            <div>
                                <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                                <p className='px-2 text-gray-700'>{desc}</p>
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