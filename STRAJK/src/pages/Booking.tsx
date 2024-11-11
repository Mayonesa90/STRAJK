import FireIcon from '../assets/fire-icon.svg'
import { useState, useEffect } from 'react'
import ShoeForm from '../components/ShoeForm'
import PostBookingBtn from '../components/PostBookingBtn'
import Nav from '../components/Nav'

export default function Booking(){
    //todays date in the format "11 nov"
    const today = new Date()
    //todays date in the format "2024-11-11"
    const todaysDateValue = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    const [todaysDate, setTodaysDate] = useState(todaysDateValue)
    const [time, setTime] = useState("21:00")
    const [numOfBowlers, setNumOfBowlers] = useState([1])
    const [numOfLanes, setNumOfLanes] = useState(1)
    const [bowlerArray, setBowlerArray] = useState([1])

    const handleDateChange = (event) => {
        setTodaysDate(event.target.value)
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    const handleNumOfBowlers = (event) => {
        setNumOfBowlers(event.target.value)
    }

    useEffect(()=> {
        const updatedBowlerArray = Array.from({ length: numOfBowlers }, (_, index) => index + 1)
        setBowlerArray(updatedBowlerArray)
    }, [numOfBowlers])
    
    const handleNumOfLanes = (event) => {
        setNumOfLanes(event.target.value)
    }


    return (
        <main className='flex flex-col place-items-center'>
            <Nav />
            <header className='flex flex-col place-items-center mt-5'>
                <img src={FireIcon} alt="fire logo" className='w-[64px]' />
                <h1 className=' font-BebasNeune text-custom-red text-[60px] tracking-wide'>BOOKING</h1>
            </header>
            <form action="" className='w-[344px] flex flex-col gap-4'>
                <header className='flex place-content-evenly place-items-center gap-2'>
                    <hr  className=' border-s-2 border-custom-purple w-[30%]'/>
                    <h2 className=' font-BebasNeune text-[24px] text-custom-purple flex-shrink-0'>WHEN, WHAT & WHO</h2>
                    <hr  className=' border-s-2 border-custom-purple w-[30%]'/>
                </header>
                <section className='flex gap-6'>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple px-1">DATE</legend>
                        <input
                            type="date"
                            id="date"
                            placeholder={todaysDate}
                            min={todaysDate}
                            onChange={handleDateChange}
                            required
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none [w-[160px]"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">TIME</legend>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            min='11:00'
                            max='22:00'
                            required
                            onChange={handleTimeChange}
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                </section>
                <section className='flex flex-col gap-6'>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">NUMBER OF AWESOME BOWLERS</legend>
                        <input
                            type="number"
                            id="bowlers"
                            placeholder='3 pers'
                            onChange={handleNumOfBowlers}
                            required
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">NUMBER OF LANES</legend>
                        <input
                            type="text"
                            id="lanes"
                            placeholder='1 lane'
                            onChange={handleNumOfLanes}
                            required
                            className="text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                </section>
                    <ShoeForm bowlerArray={bowlerArray} />
                    <PostBookingBtn />
                </form>
                
        </main>
    )
}