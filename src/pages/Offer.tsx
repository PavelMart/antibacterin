import React, { FC } from "react";
import { ScreenProps } from "../AppWrapper";

const Offer: FC<ScreenProps> = ({ screenRef }) => {
    return (
        <div ref={screenRef} className={["screen", "offer"].join(" ")}>
            <div className="bacteria bacteria_1_animate" />
            <div className="bacteria bacteria_2_animate" />
            <div className="bacteria bacteria_4_animate" />
            <div className="bacteria bacteria_5_animate" />

            <div className="offer__body">
                <h1 className="h1 offer__h1">Ключевое сообщение</h1>
                <div className="big_text offer__text">
                    Brend<b>xy</b>
                </div>
            </div>
        </div>
    );
};

export default Offer;
