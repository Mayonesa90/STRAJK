import FireYellow from '../assets/fire-yellow.svg'
import FireOrange from '../assets/fire-orange.svg'
import FireRed from '../assets/fire-red.svg'
import { fireVariants, childVariants } from "../animationVariants/fireVariants"
import { useState, useEffect } from 'react'
import ShoeForm from '../components/ShoeForm'
import PostBookingBtn from '../components/PostBookingBtn'
import Nav from '../components/Nav'
import { bookingReq, bookingRes, shoeSize } from '../interfaces/bookingInterface'
import { useStore, useConfirmationStore } from '../hooks/store'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { validateNumOfLanes } from '../validation/laneValidation'
import ErrorMsg from '../components/ErrorMsg'
import { shoeValidation } from '../validation/shoeValidation'
import { pageVariants } from '../animationVariants/pageVariants'

export default function Booking(){
    const today = new Date()
    const todaysDateValue = today.toISOString().split("T")[0];  // ISO format for date
    const { setBooking } = useStore()
    const { setConfirmation } = useConfirmationStore()
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    
    const [formData, setFormData] = useState<bookingReq>({
        when: `${todaysDateValue}T21:00`,
        lanes: 1,
        people: 1,
        shoes: [null]
    })


    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            when: `${event.target.value}T${formData.when.split("T")[1]}`
        }))
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            when: `${formData.when.split("T")[0]}T${event.target.value}`
        }));
    }

    const handleNumOfBowlers = (event: React.ChangeEvent<HTMLInputElement>) => {
        const people = parseInt(event.target.value);
        setFormData(prev => ({
            ...prev,
            people,
            shoes: people ? Array(people).fill(null) : [null] // Update shoe array based on number of bowlers
        }));
    }

    const handleNumOfLanes = (event: React.ChangeEvent<HTMLInputElement>) => {

        setFormData(prev => ({
            ...prev,
            lanes: parseInt(event.target.value)
        }));
    }

    const handleShoeInput = (event: React.ChangeEvent<HTMLSelectElement>, bowlerNum: number) => {
        const newShoeArray = [...formData.shoes];
        const shoeSizeValue = parseInt(event.target.value);

        const validShoeSize: shoeSize[] = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, null]
        if(validShoeSize.includes(shoeSizeValue as shoeSize)){
            newShoeArray[bowlerNum - 1] = shoeSizeValue as shoeSize;
        } else {
            console.log(`Invalid shoe size selected: ${shoeSizeValue}`);
            return
        }
        
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
                    headers: {
                        [key]: value
                    },
                    body: JSON.stringify(formData)
                });
        
                const result : bookingRes = await response.json();
                return setBooking(result);
            } catch (error) {
                setError(true)
                console.log(error);
            }
        
    }

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const lanesValidated = validateNumOfLanes(formData.people, formData.lanes)
        const shoesValidated = shoeValidation(formData.shoes, formData.people)
        if (!lanesValidated) {
            setErrorMessage("Max 4 bowlers / lane")
            setError(true)
            return;
        }
        if(!shoesValidated){
            setErrorMessage("Please select a shoe size for each bowler")
            setError(true)
            return;
        }
        setError(false)
        await postData(formData)
        setConfirmation(true)
        navigate('../confirmation')
    }
    
    useEffect(() => {
        if (formData.when) {
            postData(formData);
        }
    }, [formData]);

    
    
    return (
        <motion.main 
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            variants={pageVariants} 
            className='flex flex-col place-items-center bg-[#C69DD2] min-h-screen h-fit'>
            <Nav />
            <header className='flex flex-col place-items-center mt-5'>
                <motion.div 
                    className='relative h-[96px] w-[64px]'
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
                        className='absolute z-10 bottom-3 left-[25%] w-[41px]' 
                        variants={childVariants}
                    />
                    <motion.img 
                        src={FireRed} 
                        alt="" 
                        className='absolute z-20 bottom-0 left-[10%] w-[54px]' 
                        variants={childVariants}
                    />
                </motion.div>                
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
                            className="bg-transparent text-lg font-light text-black p-3  w-[160px] focus:outline-none [w-[160px]"
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
                            className="bg-transparent text-lg font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                </section>
                <section className='flex flex-col gap-6'>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">NUMBER OF AWESOME BOWLERS</legend>
                        <input
                            type="number"
                            id="bowlers"
                            placeholder='1 pers'
                            min={1}
                            onChange={handleNumOfBowlers}
                            required
                            className=" placeholder:text-black bg-transparent text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                    <fieldset className="border-2 border-custom-purple rounded-md ">
                        <legend className="text-xs tracking-wide text-custom-purple  px-1">NUMBER OF LANES</legend>
                        <input
                            type="number"
                            id="lanes"
                            min={1}
                            placeholder='1 lane'
                            onChange={handleNumOfLanes}
                            required
                            className="placeholder:text-black bg-transparent text-2xl font-light text-black p-3  w-[160px] focus:outline-none"
                        />
                    </fieldset>
                    {error ? <ErrorMsg message={errorMessage} /> : null}
                </section>
                    {formData.people > 0 ? <ShoeForm bowlerArray={formData.shoes} handleShoeInput={handleShoeInput}/> : null}  
                    <PostBookingBtn handleClick={handleClick} />
                </form>
                
        </motion.main>
    )
}