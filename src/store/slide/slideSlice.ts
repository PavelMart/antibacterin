import { createSlice } from "@reduxjs/toolkit";

interface slideState {
    startX: number;
    current: number;
    diff: number;
    isFirstOpened: boolean;
    isFirstOpenPopup: boolean;
    isSecondOpenPopup: boolean;
}

const initialState: slideState = {
    startX: 0,
    current: 0,
    diff: 0,
    isFirstOpened: false,
    isFirstOpenPopup: false,
    isSecondOpenPopup: false,
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
        setFirstOpened: (state, { payload }) => {
            state.isFirstOpened = payload;
        },
        openFirstPopup: (state, { payload }) => {
            state.isFirstOpenPopup = payload;
        },
        openSecondPopup: (state, { payload }) => {
            state.isSecondOpenPopup = payload;
        },
    },
});

export const { setStartX, setDiff, setCurrent, setFirstOpened, openFirstPopup, openSecondPopup } = slideSlice.actions;

export default slideSlice.reducer;
