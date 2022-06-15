import React, { FC } from "react";
import { OfferAdvProps } from "../../types/types";
import Button from "../Button";
const icon_a = require("./../../assets/img/offer/icon_a.png");
const icon_b = require("./../../assets/img/offer/icon_b.png");

const OfferAdv: FC<OfferAdvProps> = ({ onClick }) => {
    return (
        <div className="adv">
            <div className="adv__a">
                <img src={icon_a} alt="plate" />
                <span>Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies</span>
            </div>
            <div className="adv__b">
                <img src={icon_b} alt="plate" />
                <span>A arcu cursus vitae</span>
            </div>
            <Button text="Подробнее" icon={<div className="icon"></div>} onClick={onClick} />
        </div>
    );
};

export default OfferAdv;
