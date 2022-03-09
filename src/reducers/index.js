import changeTheNumber from "./upDown";
// yahan subko comnbine kar rahe han 
import { combineReducers } from "redux";
// combineReducers yeah ek object leta ha
 const rootReducer = combineReducers({
     changeTheNumber:changeTheNumber
 })
 export default rootReducer