import FireIcon from '../assets/fire-icon.svg'
import { useState, useEffect } from 'react'
import ShoeForm from '../components/ShoeForm'
import PostBookingBtn from '../components/PostBookingBtn'
import Nav from '../components/Nav'
import { bookingReq, bookingRes } from '../interfaces/bookingInterface'
import { useStore, useConfirmationStore } from '../hooks/store'
import { useNavigate } from 'react-router-dom'

export default function Booking(){
    const today = new Date()
    // const todaysDateValue = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    const todaysDateValue = today.toISOString().split("T")[0];  // ISO format for date
    // const [date, setDate] = useState(todaysDateValue)
    // const [time, setTime] = useState("21:00")
    // const [numOfBowlers, setNumOfBowlers] = useState<number>(0)
    // const [numOfLanes, setNumOfLanes] = useState<number>(1)
    // const [bowlerArray, setBowlerArray] = useState<number[]>([0])
    // const [shoeArray, setShoeArray] = useState<number[]>([0])
    const { setBooking } = useStore()
    const { confirmation, setConfirmation } = useConfirmationStore()
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState<bookingReq>({
        when: `${todaysDateValue}T21:00`,
        lanes: 1,
        people: 1,
        shoes: [0]
    })
    
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setDate(event.target.value)
        setFormData(prev => ({
            ...prev,
            when: `${event.target.value}T${formData.when.split("T")[1]}`
        }))
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setTime(event.target.value)
        setFormData(prev => ({
            ...prev,
            when: `${formData.when.split("T")[0]}T${event.target.value}`
        }));
    }

    const handleNumOfBowlers = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setNumOfBowlers(event.target.value)
        const people = parseInt(event.target.value);
        setFormData(prev => ({
            ...prev,
            people,
            shoes: Array(people).fill(0)  // Update shoe array based on number of bowlers
        }));
    }

    // useEffect(()=> {
    //     const updatedBowlerArray = Array.from({ length: numOfBowlers }, (_, index) => index + 1)
    //     setBowlerArray(updatedBowlerArray)
    // }, [numOfBowlers])
    
    const handleNumOfLanes = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setNumOfLanes(event.target.value)
        setFormData(prev => ({
            ...prev,
            lanes: parseInt(event.target.value)
        }));
    }

    const handleShoeInput = (event: React.ChangeEvent<HTMLInputElement>, bowlerNum: number) => {
        // const updatedShoeArray = [...shoeArray]
        // updatedShoeArray[bowlerNum - 1] = event.target.value
        // setShoeArray(updatedShoeArray)
        const newShoeArray = [...formData.shoes];
        newShoeArray[bowlerNum - 1] = parseInt(event.target.value);
        setFormData(prev => ({
            ...prev,
            shoes: newShoeArray
        }));        
    }

    //POST TO API
    const key : string = "x-api-key"
    const value : string = "738c6b9d-24cf-47c3-b688-f4f4c5747662"
    const url : string = "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com"

    async function postData(formData : bookingReq) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                // mode: 'cors',
                // cache: 'no-cache',
                // credentials: 'same-origin',
                headers: {
                    [key]: value
                },
                // redirect: 'follow',
                // referrerPolicy: 'no-referrer',
                body: JSON.stringify(formData)
            });
    
            const result : bookingRes = await response.json();
            return setBooking(result);
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        // const updatedFormData ={
        //     when: `${date}T${time}`,
        //     lanes: numOfLanes,
        //     people: numOfBowlers,
        //     shoes: shoeArray
        // }
        // await setFormData(updatedFormData)
        await postData(formData)
        await setConfirmation(true)
        navigate('../confirmation')
    }
    console.log(confirmation);
    
    useEffect(() => {
        if (formData.when) {
            postData(formData);
        }
    }, [formData]);
    
    return (
        <main className='flex flex-col place-items-center'>
            <Nav />
            <header className='flex flex-col place-items-center mt-5'>
                <img src={FireIcon} alt="fire logo" className='w-[64px]' />
                <h1 className=' font-BebasNeune text-custom-red text-[60px] tracking-wide'>BOOKING</h1>
            </header>
            <form action="POST" className='w-[344px] flex flex-col gap-4'>
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
                            placeholder={todaysDateValue} //funkar inte :(
                            value={formData.when.split("T")[0]}
                            min={todaysDateValue}
                            onChange={handleDateChange}
                            required
                            className="text-lg font-light text-black p-3  w-[160px] focus:outline-none [w-[160px]"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">TIME</legend>
                        <input
                            type="time"
                            id="time"
                            value={formData.when.split("T")[1]}
                            min='11:00'
                            max='22:00'
                            required
                            onChange={handleTimeChange}
                            className="text-lg font-light text-black p-3  w-[160px] focus:outline-none"
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
                            min={1}
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
                    {formData.people > 0 ? <ShoeForm bowlerArray={formData.shoes} handleShoeInput={handleShoeInput}/> : null}  
                    <PostBookingBtn handleClick={handleClick} />
                </form>
                
        </main>
    )
}