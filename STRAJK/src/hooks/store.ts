import { create } from 'zustand'
import { bookingRes, BookingStore, ConfirmationStore } from '../interfaces/bookingInterface'; 

export const useStore = create<BookingStore>((set) => ({
    booking: <bookingRes>{},
    setBooking: (booking : bookingRes) => set({ booking }),
    resetBooking: () => set({ booking: <bookingRes>{} })
}))

export const useConfirmationStore = create<ConfirmationStore>((set) => ({
    confirmation: <boolean>false,
    setConfirmation: (confirmation : boolean) => set({ confirmation }),
    resetConfirmation: () => set({ confirmation: false })
}))