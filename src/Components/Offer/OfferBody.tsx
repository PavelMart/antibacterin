import React, { FC } from "react";
import { OfferBodyProps } from "../../types/types";
import OfferAdv from "./OfferAdv";
import OfferHeader from "./OfferHeader";
import OfferPopup from "./OfferPopup";

const OfferBody: FC<OfferBodyProps> = ({ onClick, isOpen }) => {
    const bodyClassName = ["offer__body", isOpen && "is_open"].join(" ");

    return (
        <div className={bodyClassName}>
            <OfferHeader title={isOpen ? "Преимущества" : "Ключевое сообщение"} />
            {isOpen ? <OfferPopup onClick={onClick} /> : <OfferAdv onClick={onClick} />}
        </div>
    );
};

export default OfferBody;
