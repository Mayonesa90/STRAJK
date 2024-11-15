import { ShoeInputProps } from "../interfaces/bookingInterface"

export default function ShoeInput({bowlerNum, handleShoeInput} : ShoeInputProps){
 return (
    <fieldset className="border-2 border-custom-purple rounded-md w-full flex flex-col flex-shrink-0">
        <legend className="text-xs tracking-wide text-custom-purple  px-1">SHOE SIZE / PERSON {bowlerNum}</legend>
            <select 
                name="" 
                id="shoeSize"
                required
                className="bg-transparent text-2xl font-light text-black p-3 w-full focus:outline-none"
                onChange={(event : React.ChangeEvent<HTMLSelectElement>) => handleShoeInput(event, bowlerNum)}
                >
                    <option value="">-- select size --</option>
                    <option value="35">Euro 35</option>
                    <option value="36">Euro 36</option>
                    <option value="37">Euro 37</option>
                    <option value="38">Euro 38</option>
                    <option value="39">Euro 39</option>
                    <option value="40">Euro 40</option>
                    <option value="41">Euro 41</option>
                    <option value="42">Euro 42</option>
                    <option value="43">Euro 43</option>
                    <option value="44">Euro 44</option>
                    <option value="45">Euro 45</option>
            </select>
    </fieldset>
 )
}