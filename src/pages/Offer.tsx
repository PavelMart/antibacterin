import React, { FC } from "react";
import OfferBacteries from "../Components/Offer/OfferBacteries";
import OfferBody from "../Components/Offer/OfferBody";
import OfferBottle from "../Components/Offer/OfferBottle";
import PopupBackground from "../Components/Offer/PopupBackground";
import { openSecondPopup } from "../store/slide/slideSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { OfferProps } from "../types/types";

const Offer: FC<OfferProps> = ({ screenRef }) => {
    const { isSecondOpenPopup } = useAppSelector((state) => state.slide);
    const dispatch = useAppDispatch();

    const tooglePopup = () => {
        dispatch(openSecondPopup(!isSecondOpenPopup));
    };

    return (
        <div ref={screenRef} className={["screen", "offer"].join(" ")}>
            {isSecondOpenPopup && <PopupBackground />}
            <OfferBacteries />
            <OfferBottle />
            <OfferBody onClick={tooglePopup} isOpen={isSecondOpenPopup} />
        </div>
    );
};

export default Offer;
