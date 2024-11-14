export default function ErrorMsg({message} : {message : string}) {
    return (
        <div className="bg-custom-red text-white w-fit p-4 rounded-sm">
            <p>{message}</p>
        </div>
    )
}