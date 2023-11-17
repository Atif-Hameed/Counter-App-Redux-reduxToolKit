import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./components/redux/reducers";

const store = configureStore({
    reducer: rootReducer,
    devTools:'window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()'
})

export default store;