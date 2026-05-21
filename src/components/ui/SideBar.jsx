import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import { House, Heart, Bookmark, Settings, LogOut } from 'lucide-react';

function SideBar() {
    const { user, logout } = useContext(AuthContext);

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
        <div className='flex flex-col gap-1 items-center pr-2 pl-2 pt-3'>
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

            {user &&
                <button
                    onClick={logout}
                    className='text-secondary-text rounded-xl flex justify-center items-center w-14 h-14 hover:bg-hover hover:text-primary duration-300'>
                    <LogOut />
                </button>
            }

        </div >
    )
}

export default SideBar;