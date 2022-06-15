import { createSlice } from "@reduxjs/toolkit";

interface slideState {
    startX: number;
    current: number;
    diff: number;
    isFirstOpened: boolean;
}

const initialState: slideState = {
    startX: 0,
    current: 2,
    diff: 0,
    isFirstOpened: false,
};

const slideSlice = createSlice({
    name: "slide",
    initialState,
    reducers: {
        setStartX: (state, { payload }) => {
            state.startX = payload;
        },
        setDiff: (state, { payload }) => {
            state.diff = payload;
        },
        setCurrent: (state, { payload }) => {
            state.current = payload;
        },
        setFirstOpened: (state) => {
            state.isFirstOpened = true;
        },
    },
});

export const { setStartX, setDiff, setCurrent, setFirstOpened } = slideSlice.actions;

export default slideSlice.reducer;
