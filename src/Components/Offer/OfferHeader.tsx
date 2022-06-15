import React, { FC } from "react";
import { OfferHeaderProps } from "../../types/types";

const OfferHeader: FC<OfferHeaderProps> = ({ title }) => {
    return (
        <>
            <h1 className="h1 offer__h1">{title}</h1>;
            <div className="big_text offer__text">
                Brend<b>xy</b>
            </div>
        </>
    );
};

export default OfferHeader;
