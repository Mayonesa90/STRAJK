import ConfirmBookingBtn from "../components/ConfirmBookingBtn"
import FireIcon from '../assets/fire-icon.svg'
import Nav from '../components/Nav'

export default function Confirmation(){
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
                            placeholder='21:00, 3 dec'
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">WHO</legend>
                        <input
                            type="text"
                            id="who"
                            placeholder='3 pers'
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">LANES</legend>
                        <input
                            type="text"
                            id="lanes"
                            placeholder='1 lane'
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">BOOKING NUMBER</legend>
                        <input
                            type="text"
                            id="bookingNum"
                            placeholder='STR8122744'
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                </section>
                <section className="flex justify-between border-custom-red border-solid border-[1px] text-custom-red px-[16px] py-[12px] rounded-md text-[24px]">
                    <h3 className="font-WorkSans font-bold">total</h3>
                    <h3>460sek</h3>
                </section>
                <ConfirmBookingBtn />
                </form>
                </main>
    )
}