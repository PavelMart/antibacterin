import React, { FC, useEffect, useRef, useState } from "react";
import AnounceBacteries from "../Components/Anounce/AnounceBacteries";
import Scroll from "../Components/Scroll/Scroll";
import { AnounceProps, Handlers } from "../types/types";
import { onScrollEnd, onScrollMove, onScrollStart } from "../utils/scroll";

const Anounce: FC<AnounceProps> = ({ screenRef, isFirstOpened }) => {
    const [isGrabbed, setIsGrabbed] = useState(false);

    const scrollBody: React.RefObject<HTMLDivElement> = useRef(null);
    const scrollText: React.RefObject<HTMLDivElement> = useRef(null);
    const scrollThumb: React.RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        if (scrollThumb?.current && scrollText?.current && scrollBody?.current)
            scrollThumb.current.style.height = `${(scrollBody.current.offsetHeight / scrollText.current.offsetHeight) * 100}%`;
    }, []);

    const onTouchStart = (e: any) => {
        onScrollStart(e);
    };

    const onTouchMove = (e: any) => {
        onScrollMove(e, scrollText);
    };

    const onTouchEnd = () => {
        onScrollEnd();
    };

    const onMouseDown = (e: any) => {
        setIsGrabbed(true);
        onScrollStart(e);
    };

    const onMouseMove = (e: any) => {
        if (isGrabbed) onScrollMove(e, scrollText);
    };

    const onMouseUp = () => {
        setIsGrabbed(false);

        onScrollEnd();
    };

    const handlers: Handlers = {
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onMouseDown: onMouseDown,
        onMouseMove: onMouseMove,
        onMouseUp: onMouseUp,
    };

    return (
        <div ref={screenRef} className={["screen", "anounce", isFirstOpened && "first_opened"].join(" ")}>
            <AnounceBacteries />

            <div className="anounce__body">
                <h1 className="h1 anounce__h1">Текст сообщения</h1>
                <Scroll scrollBody={scrollBody} scrollText={scrollText} scrollThumb={scrollThumb} handlers={handlers} />
            </div>
        </div>
    );
};

export default Anounce;
