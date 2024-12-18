import ShoeInput from './ShoeInput'
import { ShoeFormProps } from '../interfaces/bookingInterface'


export default function ShoeForm({bowlerArray, handleShoeInput} : ShoeFormProps){    
    // console.log('bowlerArray: ', bowlerArray);
    
    return (
        <section className='w-[344px] flex flex-col gap-4'>
                <header className='flex place-content-evenly place-items-center gap-2'>
                    <hr  className=' border-s-2 border-custom-purple w-[30%]'/>
                    <h2 className=' font-BebasNeune text-[24px] text-custom-purple flex-shrink-0'>SHOES</h2>
                    <hr  className=' border-s-2 border-custom-purple w-[30%]'/>
                </header>
                <section className='flex gap-6 flex-col flex-wrap'>
                    {bowlerArray.map((_bowler, index) => (
                        <ShoeInput key={index} bowlerNum={index + 1} handleShoeInput={handleShoeInput} />
                    ))}
                </section>
                    
        </section>
    )
}