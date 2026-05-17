import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
    return (
        <footer className='flex flex-col items-center gap-4'>
            <p className='flex items-center justify-center gap-2'>
                <span className='font-bold text-primary sm:text-lg md:text-xl'>AFLAMKO</span>
                <span className='text-secondary-text text-[12px] sm:text-sm md:text-lg'>Discover Movies & Series.</span>
            </p>

            <div className='flex flex-col gap-4'>
                <ul className='flex gap-5 justify-center text-secondary-text text-[12px] sm:text-sm md:text-lg'>
                    <li className='hover:text-primary duration-300'>
                        <Link to=''>Copy Rights</Link>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <Link to=''>About / Contact</Link>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <Link to=''>Terms / Privacy</Link>
                    </li>
                    <li className='hover:text-primary duration-300'>
                        <Link to=''>TMDB credit</Link>
                    </li>
                </ul>

                <div className='flex items-center justify-center gap-4 text-secondary-text '>
                    <a href='https://www.facebook.com/mohamed.mahmoud.907896' target='_blank' ><BsFacebook className='w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-700 duration-300' /></a>
                    <a href='https://www.instagram.com/m.mahmoud.alsaid/' target='_blank' ><BsInstagram className='w-5 h-5 sm:w-6 sm:h-6 hover:text-pink-700 duration-300' /></a>
                    <a href='https://github.com/m-mahmoud-alsaid' target='_blank' ><BsGithub className='w-5 h-5 sm:w-6 sm:h-6 hover:text-purple-700 duration-300' /></a>
                    <a href='https://www.linkedin.com/in/m-mahmoud-alsaid/' target='_blank' ><BsLinkedin className='w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-500 duration-300' /></a>
                </div>

                <hr />

                <p className='text-secondary-text text-sm sm:text-sm md:text-lg text-center'>© 2026 Mohamed Mahmoud. All Rights Reserved.</p>
            </div>

        </footer>
    )
}

export default Footer;