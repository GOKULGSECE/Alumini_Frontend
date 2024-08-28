import { configureStore } from "@reduxjs/toolkit";
import JobsSlice from "./JobsSlice";

const store = configureStore({
    reducer: {
        jobs : JobsSlice,
    },
});

export default store;