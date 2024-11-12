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
    id: string,
    active: boolean
}