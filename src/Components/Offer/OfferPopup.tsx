import React, { FC, useState } from "react";
import { OfferPopupProps, Pages } from "../../types/types";
import Advantage from "./Advantage";

const OfferPopup: FC<OfferPopupProps> = ({ onClick }) => {
    const [page, setPage] = useState(0);

    const pages: Pages = [
        [
            { num: 1, text: "soluta minus at architecto similique quaerat!" },
            { num: 2, text: "dolor sit amet consectetur adipisicing" },
            { num: 3, text: "Lorem, ipsum dolor sit amet" },
        ],
        [
            { num: 4, text: "consectetur adipisicing elit. Culpa," },
            { num: 5, text: "ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit earum" },
            { num: 6, text: "Lorem, ipsum dolor sit amet" },
        ],
    ];

    const backPage = () => {
        setPage(0);
    };

    const nextPage = () => {
        setPage(1);
    };

    return (
        <>
            <div className="close" onClick={onClick} />
            <div className="popup">
                {pages[page].map((advantage) => (
                    <Advantage advantage={advantage} key={advantage.num} />
                ))}
            </div>
            <div className="switch">
                <button className="switch__button switch__button_back" onClick={backPage} />
                <div className="switch__indicator">
                    <div className={[page === 0 && "active"].join(" ")} />
                    <div className={[page === 1 && "active"].join(" ")} />
                </div>
                <button className="switch__button switch__button_next" onClick={nextPage} />
            </div>
        </>
    );
};

export default OfferPopup;
