// import { type } from "@testing-library/user-event/dist/type"
// it is an pure action component , here we define what to do
export const incNumber = ()=>{
return {
    type:"INCREMENT"
}
}
    

export const decNumber = ()=>{
    return {
        type:"DECREMENT"
    }
}