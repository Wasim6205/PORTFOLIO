import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <hr />
        <footer className='py-12'>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex space-x-4'>
                        <a href="https://www.facebook.com/mdwasim.ansari.35380399/" target="_blank"><FaFacebook size={24} /></a>
                        <a href="https://x.com/MdWasim97037797" target="_blank"><FaTwitter size={24} /></a>
                        <a href="https://www.instagram.com/_code_with_wasim/" target="_blank"><FaInstagram size={24} /></a>
                        <a href="https://www.linkedin.com/in/md-wasim-ansari-04b645263/" target="_blank"><FaLinkedin size={24} /></a>
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                     <p className='text-sm'>Copyright © 2024 Md Wasim. All Rights reserved.</p>
                     <p className='text-sm'>Made by Wasim ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer