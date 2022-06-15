import React from "react";
import { openSecondPopup } from "../../store/slide/slideSlice";
import { useAppDispatch } from "../../store/store";

const PopupBackground = () => {
    const dispatch = useAppDispatch();

    const closePopup = () => {
        dispatch(openSecondPopup(false));
    };
    return <div className="popup__background" onClick={closePopup}></div>;
};

export default PopupBackground;
