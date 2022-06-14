import { createSlice } from "@reduxjs/toolkit";

interface slideState {
    current: number;
    isFirstOpened: boolean;
}

const initialState: slideState = {
    current: 0,
    isFirstOpened: false,
};

const slideSlice = createSlice({
    name: "slide",
    initialState,
    reducers: {
        setSlide: (state, { payload }) => {
            state.current = payload;
        },
        setFirstOpened: (state) => {
            state.isFirstOpened = true;
        },
    },
});

export const { setSlide, setFirstOpened } = slideSlice.actions;

export default slideSlice.reducer;
