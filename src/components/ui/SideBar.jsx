import { NavLink } from 'react-router-dom';

import { House } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Bookmark } from 'lucide-react';
import { Settings } from 'lucide-react';

function SideBar() {
    const sideBarLinks = [
        {
            id: 1,
            icon: <House />,
            path: '/home'
        },
        {
            id: 2,
            icon: <Heart />,
            path: '/home/favorites'
        },
        {
            id: 3,
            icon: <Bookmark />,
            path: '/home/bookmarks'
        },
        {
            id: 4,
            icon: <Settings />,
            path: '/home/settings'
        },
    ];

    return (
        <div className='pr-2 pl-2 pt-3'>
            <ul className='flex flex-col gap-1'>{sideBarLinks.map(link => (
                <li key={link.id}>
                    <NavLink
                        to={link.path}
                        end
                        className={({ isActive }) =>
                            `rounded-xl flex justify-center items-center w-14 h-14 hover:bg-hover hover:text-primary duration-300
                            ${isActive ? 'text-red-500 bg-hover' : 'text-secondary-text'}`}>
                        {link.icon}
                    </NavLink>
                </li>
            ))}
            </ul>
        </div >
    )
}

export default SideBar;