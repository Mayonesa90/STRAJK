import { shoeSize } from "../interfaces/bookingInterface";

export const shoeValidation = (shoes : shoeSize[], people: number) => {

    //map over the shoes array to see if there's any that are null and therefore hasnt picked a size
    const checkForSizes = shoes.map((shoe) => {
        if (shoe === null) {
            return true;
        } else {
            return false;
        }
    });

    //turn it into a boolean variable if there is any size that hasnt been chosen
    const sizeNotChosen = checkForSizes.includes(true);
    
    if (shoes.length !== people || sizeNotChosen) {
        return false;
    }
    return true;
}