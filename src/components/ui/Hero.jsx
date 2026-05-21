import { Play, Plus } from 'lucide-react';
import Image from '../../assets/imgs/profile.jpeg';

function Hero() {
    return (

        <div className='relative w-full h-full'>
            <img
                src={Image}
                className='min-w-full max-w-full h-full object-cover'>

            </img>
            <div className='z-50 flex gap-3 items-center justify-center absolute bottom-0 sm:bottom-35 md:bottom-50 left-21 '>
                <button className='flex gap-2 items-center justify-center rounded-xl p-2 pt-3 pb-3 w-36 h-12 bg-primary font-bold text-primary-text hover:text-primary hover:bg-card duration-300'>
                    <Play />
                    Watch Now
                </button>

                <button className='flex items-center justify-center rounded-xl p-2 pt-3 pb-3 w-16 h-12 bg-card font-bold text-yellow-600 hover:bg-[#2d2d36] duration-300'>
                    <Plus />
                </button>
            </div>
        </div>

    )
}

export default Hero;