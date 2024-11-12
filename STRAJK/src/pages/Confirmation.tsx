import ConfirmBookingBtn from "../components/ConfirmBookingBtn"
import FireIcon from '../assets/fire-icon.svg'
import Nav from '../components/Nav'
import { useStore } from '../hooks/store'
import { bookingRes } from "../interfaces/bookingInterface"
import { useConfirmationStore } from "../hooks/store"
import { Link} from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Confirmation(){

    const booking = useStore()
    const { when, lanes, people, price, id } : bookingRes = booking.booking
    const { confirmation, setConfirmation } = useConfirmationStore()

    return (
        <motion.main 
            className='flex flex-col place-items-center bg-[#C69DD2] min-h-screen h-fit'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Fade-out animation on exit
            transition={{ duration: 1 }}
        >
            <Nav />
            <header className='flex flex-col place-items-center mt-5'>
                <img src={FireIcon} alt="fire logo" className='w-[64px]' />
                <h1 className=' font-BebasNeune text-custom-red text-[60px] tracking-wide'>SEE YOU SOON!</h1>
            </header>
            {confirmation ? (
                 <article className='w-[344px] flex flex-col gap-4'>
                 <header className='flex place-content-evenly place-items-center gap-2'>
                     <hr  className=' border-s-2 border-custom-purple w-[30%]'/>
                     <h2 className=' font-BebasNeune text-[24px] text-custom-purple flex-shrink-0'>BOOKING DETAILS</h2>
                     <hr  className=' border-s-2 border-custom-purple w-[30%]'/>
                 </header>
                 <section className='flex flex-col gap-6'>
                     <fieldset className="border-2 border-custom-purple rounded-md ">
                         <legend className="text-xs tracking-wide text-custom-purple  px-1">WHEN</legend>
                         <p className="text-2xl font-light text-black p-3">{when}</p>
                     </fieldset>
                     <fieldset className="border-2 border-custom-purple rounded-md ">
                         <legend className="text-xs tracking-wide text-custom-purple  px-1">WHO</legend>
                         <p className="text-2xl font-light text-black p-3">{people} pers</p>
                     </fieldset>
                     <fieldset className="border-2 border-custom-purple rounded-md ">
                         <legend className="text-xs tracking-wide text-custom-purple  px-1">LANES</legend>
                         <p className="text-2xl font-light text-black p-3">{lanes} lanes</p>
                     </fieldset>
                     <fieldset className="border-2 border-custom-purple rounded-md ">
                         <legend className="text-xs tracking-wide text-custom-purple  px-1">BOOKING NUMBER</legend>
                         <p className="text-2xl font-light text-black p-3">{id}</p>
                     </fieldset>
                 </section>
                 <section className="flex justify-between border-custom-red border-solid border-[1px] text-custom-red px-[16px] py-[12px] rounded-md text-[24px]">
                     <h3 className="font-WorkSans font-bold">total</h3>
                     <h3>{price} sek</h3>
                 </section>
                 <ConfirmBookingBtn />
                 </article>
                 
            ) : (
                <article className='w-[344px] font-WorkSans text-center h-[30vh] text-xl flex flex-col place-content-center gap-4'>
                    <h2>No active booking found</h2>
                    <Link to='../booking'>
                    <button className="bg-[#229a66] font-WorkSans font-bold text-white text-[24px] p-5 rounded-md tracking-wide hover:bg-[#19744c] ">
                        Make a booking
                    </button>
                    </Link>
                </article>
            )}
            </motion.main>
           
    )
}