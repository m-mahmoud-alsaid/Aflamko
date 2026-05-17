import { useState, useEffect } from 'react';

import Header from '../ui/Header';
import SideBar from '../ui/SideBar';

import { ChevronUp } from 'lucide-react';

function HomeLayout({ children, footer }) {

    const [goUp, setGoUp] = useState(false);

    const goTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            setGoUp(window.scrollY >= 500);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='min-h-screen max-h-screen flex flex-col'>

            <div className='h-44.5'>
                <Header />
            </div>

            <div className='flex-1'>
                <aside className='w-18 h-full bg-card rounded-tr-xl fixed z-30 shadow-[0_0_25px_rgba(229,9,20,0.15)]'>
                    <SideBar />
                </aside>

                <section className='relative p-3 pt-0 pl-21 sm:p-7 sm:pl-25 sm:pt-0 overflow-y-auto overflow-x-auto'>
                    {children}

                    {goUp &&
                        <button
                            className='fixed cursor-pointer z-50 flex items-center justify-center w-10 h-10 sm:w-13 sm:h-13 sm:right-5 right-3 bottom-7 rounded-xl bg-primary text-primary-text hover:bg-card hover:text-primary duration-300'
                            onClick={goTop}>
                            <ChevronUp size={30} />
                        </button>}
                </section>

                <div className='bg-card relative shadow-[0_0_25px_rgba(229,9,20,0.15)] p-3 pl-21 sm:p-7 sm:pl-25'>
                    {footer}
                </div>
            </div>
        </div>
    )
}

export default HomeLayout;