import React, { FC } from "react";
import { ScreenProps } from "../AppWrapper";

const Offer: FC<ScreenProps> = ({ screenRef }) => {
    return (
        <div ref={screenRef} className={["screen", "offer"].join(" ")}>
            Offer
        </div>
    );
};

export default Offer;
