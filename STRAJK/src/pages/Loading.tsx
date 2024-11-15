import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FireRed from '../assets/fire-red.svg'
import FireOrange from '../assets/fire-orange.svg'
import FireYellow from '../assets/fire-yellow.svg'

export default function Loading(){
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/booking'); 
        }, 3000); // 3000ms = 3 seconds

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, [navigate]);


    const fireVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.5, // Stagger timing
            },
        },
    };

    const childVariants = {
        initial: { rotate: 0 }, // Start state
        animate: { rotate: [0, 10, 0], transition: { duration: 1, repeat: Infinity } }
    };

    return (
        <motion.main 
            className='flex flex-col place-items-center h-full items-center place-content-center bg-[#C69DD2] '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ duration: 1 }}
        >
                <motion.div 
                    className='relative h-[196px] w-[136px]'
                    variants={fireVariants}
                    animate={'animate'}
                    initial={'initial'}
                >
                    <motion.img 
                        src={FireYellow} 
                        alt="" 
                        className='absolute z-0 bottom-0 '
                        variants={childVariants} 
                    />
                    <motion.img 
                        src={FireOrange} 
                        alt="" 
                        className='absolute z-10 bottom-11 left-[25%]' 
                        variants={childVariants}
                    />
                    <motion.img 
                        src={FireRed} 
                        alt="" 
                        className='absolute z-20 bottom-0 left-[10%]' 
                        variants={childVariants}
                    />
                </motion.div>
                <h1 className=' font-BebasNeune text-custom-red text-[80px] tracking-wide'>STRAJK</h1>
                <p className=' font-WorkSans tracking-[0.5em]'>BOWLING</p>
        </motion.main>
    )
}