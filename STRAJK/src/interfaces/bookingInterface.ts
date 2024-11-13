
export interface bookingReq {
    when: string,
    lanes: number,
    people: number,
    shoes: number[]
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