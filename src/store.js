import { createStore } from "redux";
import rootReducer from "./reducers/index";
// createStore mein rootReducer ko pass karte han ,root reducer mein sare state hote han 
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store