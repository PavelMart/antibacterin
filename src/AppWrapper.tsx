import React, { useEffect, useRef, useState } from "react";
import App from "./App";
import "./App.scss";
import MainPopup from "./Components/Popup/Popup";
import { openFirstPopup, setCurrent, setFirstOpened } from "./store/slide/slideSlice";
import { useAppDispatch, useAppSelector } from "./store/store";
import { Handlers, ScreenList } from "./types/types";
import { handleEnd, handleMove, handleStart, moveTo } from "./utils/swipe";

function AppWrapper() {
    const { startX, diff, current, isFirstOpened, isFirstOpenPopup, isSecondOpenPopup } = useAppSelector((state) => state.slide);
    const [isGrabbed, setIsGrabbed] = useState(false);
    const [isSwipe, setIsSwipe] = useState(true);

    const dispatch = useAppDispatch();

    const mainRef: React.RefObject<HTMLDivElement> = useRef(null);
    const anounceRef: React.RefObject<HTMLDivElement> = useRef(null);
    const offerRef: React.RefObject<HTMLDivElement> = useRef(null);

    const screenList: ScreenList = [
        { ref: mainRef, slide: 0 },
        { ref: anounceRef, slide: 1 },
        { ref: offerRef, slide: 2 },
    ];

    useEffect(() => {
        resize();
        window.addEventListener("resize", resize);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (current > 0) dispatch(setFirstOpened(true));
        else dispatch(setFirstOpened(false));

        moveTo(screenList, current, diff);

        screenList.forEach(({ ref, slide }) => {
            if (ref.current) {
                ref.current.style.display = "";
                if (Math.abs(slide - current) === 2) ref.current.style.display = "none";
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, diff]);

    const resize = () => {
        if (window.innerWidth === 1024 && window.innerHeight === 768) {
            dispatch(openFirstPopup(false));
        } else {
            dispatch(openFirstPopup(true));
        }
    };

    const onNextClick = () => {
        dispatch(setCurrent(1));
    };

    const onHomeClick = () => {
        dispatch(setCurrent(0));
    };

    const onStart = (e: any) => {
        setIsGrabbed(true);
        if (e.target.closest(".scroll")) setIsSwipe(false);
        handleStart(e, screenList, dispatch);
    };

    const onMove = (e: any) => {
        if (isGrabbed && isSwipe && !isFirstOpenPopup && !isSecondOpenPopup) {
            handleMove(e, dispatch, startX);
        }
    };

    const onEnd = () => {
        setIsGrabbed(false);
        handleEnd(dispatch, screenList, diff, current);
        setIsSwipe(true);
    };

    const handlers: Handlers = {
        onTouchStart: onStart,
        onTouchMove: onMove,
        onTouchEnd: onEnd,
        onMouseDown: onStart,
        onMouseMove: onMove,
        onMouseUp: onEnd,
    };

    return (
        <div className={["App", isGrabbed && "is-grabbed"].join(" ")} {...handlers}>
            <MainPopup isOpen={isFirstOpenPopup} />
            <App
                mainRef={mainRef}
                anounceRef={anounceRef}
                offerRef={offerRef}
                isFirstOpened={isFirstOpened}
                onNextClick={onNextClick}
                onHomeClick={onHomeClick}
            />
        </div>
    );
}

export default AppWrapper;
