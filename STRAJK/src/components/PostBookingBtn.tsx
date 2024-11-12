


export default function PostBookingBtn({handleClick, formData}){
    
    const key : string = "x-api-key"
    const value : string = "738c6b9d-24cf-47c3-b688-f4f4c5747662"
    const url : string = "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com"

    async function postData(data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                [key]: value
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    return (
        <button 
            onClick={handleClick}
            className="bg-custom-red font-WorkSans font-bold text-white text-[24px] p-5 rounded-md tracking-wide hover:bg-[#b7304d]">
            STRIIIIIIKE!
        </button>
    )
}