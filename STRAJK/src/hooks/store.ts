import {create} from 'zustand'
import { bookingRes } from '../interfaces/bookingInterface'; 

export const useStore = create((set) => ({
    booking: <bookingRes>{},
    setBooking: (booking : bookingRes) => set({ booking }),
    resetBooking: () => set({ booking: {} })
}))

export const useConfirmationStore = create((set) => ({
    confirmation: false,
    setConfirmation: (confirmation : boolean) => set({ confirmation }),
    resetConfirmation: () => set({ confirmation: false })
}))