import FireIcon from '../assets/fire-icon.svg'


export default function Loading(){


    return (
        <main className='flex flex-col place-items-center h-full items-center place-content-center '>
            <img src={FireIcon} alt="" className='w-56' />
            <h1 className=' font-BebasNeune text-custom-red text-[80px] tracking-wide'>STRAJK</h1>
            <p className=' font-WorkSans tracking-[0.5em]'>BOWLING</p>
        </main>
    )
}