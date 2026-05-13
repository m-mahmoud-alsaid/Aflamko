import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='min-h-screen min-w-screen flex gap-7 flex-col justify-center items-center'>
            <p className='text-primary font-bold text-4xl'>404 Page Not Found</p>
            <Link
                to='/home'
                className='p-5 rounded-xl font-bold bg-primary text-white hover:bg-hover hover:text-primary duration-300'>
                Go To Home
            </Link>
        </div>
    )
}

export default NotFound;