import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Search from './Search';

import { Bell, TextAlignJustify } from 'lucide-react';

import Image from '../../assets/imgs/profile.jpeg';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    const linksArr = [
        {
            id: 1,
            linkName: 'Home',
            linkPath: '/home'
        },
        {
            id: 2,
            linkName: 'Movies',
            linkPath: '/home/movies'
        },
        {
            id: 3,
            linkName: 'Tv Shows',
            linkPath: '/home/tv-shows'
        },
        {
            id: 4,
            linkName: 'Categories',
            linkPath: '/home/genres'
        }
    ];

    const handleMenuClick = () => setOpenMenu(!openMenu);
    const handleNavigate = () => navigate('/home');

    return (
        <header className='pr-2 pl-2 lg:pr-5 lg:pl-5 md:flex md:justify-between md:gap-10 lg:gap-35 md:items-center md:pt-5 mb-12'>
            <h1
                className='cursor-pointer text-title text-primary font-black uppercase text-center pt-5 pb-5 md:pt-0 md:pb-0 hover:scale-[0.9] transition-transform duration-500 ease-out'
                onClick={handleNavigate}>
                aflamko
            </h1>

            <div className='relative flex gap-5 justify-between items-center flex-1'>
                <nav className='hidden md:flex-1 md:flex gap-5 text-secondary-text font-bold'>
                    {linksArr.map(linkDetails => (
                        <NavLink
                            key={linkDetails.id}
                            to={linkDetails.linkPath}
                            end
                            className={({ isActive }) => (
                                `hover:text-primary duration-300
                            ${isActive ? 'text-primary' : ''}`
                            )}>{linkDetails.linkName}</NavLink>
                    ))}
                </nav>

                <button
                    className='md:hidden text-secondary-text'
                    onClick={handleMenuClick} >
                    <TextAlignJustify />
                </button>

                {openMenu && <ul className='absolute z-50 md:hidden top-[120%] w-full pt-5 pb-5 rounded-xl text-secondary-text font-bold bg-card  flex flex-col'>
                    {linksArr.map(linkDetails => (
                        <li
                            key={linkDetails.id}
                            onClick={handleMenuClick}
                            className='hover:text-primary hover:bg-hover duration-300 pl-5 pt-3 pb-3 rounded-xl'>
                            <NavLink
                                to={linkDetails.linkPath}
                                end
                                className={({ isActive }) => (
                                    isActive ? 'text-primary' : ''
                                )}>{linkDetails.linkName}</NavLink>
                        </li>
                    ))}
                </ul>}

                <Search />

                <div className='flex items-center'>

                    <button className='text-secondary-text mr-2 md:mr-4 hover:text-primary duration-300'>
                        <Bell className='' />
                    </button>

                    <div className='w-12 h-12 rounded-full border-2 border-black overflow-hidden'>
                        <img src={Image} alt='Profile Image' className='object-cover w-full h-full' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;