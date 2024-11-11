

export default function ShoeInput({bowlerNum}){
 return (
    <fieldset className="border-2 border-custom-purple rounded-md w-full flex flex-col flex-shrink-0">
        <legend className="text-xs tracking-wide text-custom-purple  px-1">SHOE SIZE / PERSON {bowlerNum}</legend>
            <input
                type="text"
                id="shoeSize"
                placeholder='Euro 37'
                className="text-2xl font-light text-black p-3 w-full focus:outline-none"
            />
    </fieldset>
 )
}