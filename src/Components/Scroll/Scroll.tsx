import React, { FC } from "react";
import { ScrollProps } from "../../types/types";
import ScrollText from "./ScrollText";

const Scroll: FC<ScrollProps> = ({ scrollBody, scrollText, scrollThumb, handlers }) => {
    return (
        <div className="scroll">
            <div className="scroll__body" ref={scrollBody}>
                <div className="scroll__wrapper">
                    <ScrollText scrollText={scrollText} />
                </div>
            </div>
            <div className="scrollbar">
                <div className="scrollbar__thumb" ref={scrollThumb} {...handlers}></div>
            </div>
        </div>
    );
};

export default Scroll;
