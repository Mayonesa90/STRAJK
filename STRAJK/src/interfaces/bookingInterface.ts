export type shoeSize = 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | null


export interface bookingReq {
    when: string,
    lanes: number,
    people: number,
    shoes: shoeSize[]
}

export interface bookingRes {
    when: string,
    lanes: number,
    people: number,
    shoes: number[],
    price: number,
    id: string,
    active: boolean
}

export interface BowlerArray {
    map(arg0: (bowler: number, index: number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    bowlerArray: Array<number>
}

export interface ShoeFormProps {
    bowlerArray: number[],
    handleShoeInput: (event: React.ChangeEvent<HTMLSelectElement>, bowlerNum: number) => void
}

export interface ShoeInputProps {
    bowlerNum: number,
    handleShoeInput: (event: React.ChangeEvent<HTMLSelectElement>, bowlerNum: number) => void
}

export interface BookingStore {
    booking: bookingRes,
    setBooking: (booking: bookingRes) => void,
    resetBooking: () => void
}

export interface ConfirmationStore {
    confirmation: boolean;
    setConfirmation: (confirmation: boolean) => void;
    resetConfirmation: () => void;
  }