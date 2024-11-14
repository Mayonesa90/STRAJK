export const validateNumOfLanes = (people : number, lanes : number) : boolean => {
    if (people > lanes * 4) {
        return false
    } else {
        return true
    }
}