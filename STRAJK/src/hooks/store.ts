import {create} from 'zustand'
import { bookingRes } from '../interfaces/bookingInterface'; 

export const useStore = create((set) => ({
    booking: <bookingRes>{},
    setBooking: (booking : bookingRes) => set({ booking }),
    resetBooking: () => set({ booking: {} })
}))