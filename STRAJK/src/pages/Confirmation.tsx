import ConfirmBookingBtn from "../components/ConfirmBookingBtn"
import FireIcon from '../assets/fire-icon.svg'
import Nav from '../components/Nav'
import { useStore } from '../hooks/store'

export default function Confirmation(){

    const booking = useStore()
    const { when, lanes, people, shoes, price, id } = booking.booking

    console.log(when);
    
    
    console.log('booking on Confirmation: ', booking.booking);
    return (
        <main className='flex flex-col place-items-center'>
            <Nav />
            <header className='flex flex-col place-items-center mt-5'>
                <img src={FireIcon} alt="fire logo" className='w-[64px]' />
                <h1 className=' font-BebasNeune text-custom-red text-[60px] tracking-wide'>SEE YOU SOON!</h1>
            </header>
            <form action="" className='w-[344px] flex flex-col gap-4'>
                <header className='flex place-content-evenly place-items-center gap-2'>
                    <hr  className=' border-s-2 border-custom-purple w-[30%]'/>
                    <h2 className=' font-BebasNeune text-[24px] text-custom-purple flex-shrink-0'>BOOKING DETAILS</h2>
                    <hr  className=' border-s-2 border-custom-purple w-[30%]'/>
                </header>
                <section className='flex flex-col gap-6'>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">WHEN</legend>
                        <input
                            type="text"
                            id="when"
                            placeholder={when}
                            className="text-2xl font-light text-black p-3   focus:outline-none"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">WHO</legend>
                        <input
                            type="text"
                            id="who"
                            placeholder={`${people} people`}
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">LANES</legend>
                        <input
                            type="text"
                            id="lanes"
                            placeholder={`${lanes} lanes`}
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">BOOKING NUMBER</legend>
                        <input
                            type="text"
                            id="bookingNum"
                            placeholder={id}
                            className="text-2xl font-light text-black p-3 focus:outline-none"
                        />
                    </fieldset>
                </section>
                <section className="flex justify-between border-custom-red border-solid border-[1px] text-custom-red px-[16px] py-[12px] rounded-md text-[24px]">
                    <h3 className="font-WorkSans font-bold">total</h3>
                    <h3>{price} sek</h3>
                </section>
                <ConfirmBookingBtn />
                </form>
                </main>
    )
}