import FireIcon from '../assets/fire-icon.svg'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Loading(){
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/booking'); 
        }, 3000); // 3000ms = 3 seconds

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, [navigate]);


    return (
        <motion.main 
            className='flex flex-col place-items-center h-full items-center place-content-center '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Fade-out animation on exit
            transition={{ duration: 1 }} // Adjust duration for smoother exit
        >
                <img src={FireIcon} alt="" className='w-56' />
                <h1 className=' font-BebasNeune text-custom-red text-[80px] tracking-wide'>STRAJK</h1>
                <p className=' font-WorkSans tracking-[0.5em]'>BOWLING</p>
        </motion.main>
    )
}