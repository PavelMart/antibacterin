import React, { FC } from "react";
import { AdvantageProps } from "../../types/types";

const Advantage: FC<AdvantageProps> = ({ advantage }) => {
    return (
        <div className="advantage">
            <div className="advantage__num">0{advantage.num}</div>
            <div className="advantage__text">{advantage.text}</div>
        </div>
    );
};

export default Advantage;
