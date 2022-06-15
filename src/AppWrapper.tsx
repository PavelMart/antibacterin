import React, { useEffect, useRef, useState } from "react";
import App from "./App";
import "./App.scss";
import { setCurrent, setFirstOpened } from "./store/slide/slideSlice";
import { useAppDispatch, useAppSelector } from "./store/store";
import { handleEnd, handleMove, handleStart, moveTo } from "./utils/swipe";

export interface ScreenProps {
    screenRef: React.RefObject<HTMLDivElement>;
    isFirstOpened?: boolean;
    screenList?: Screen[];
}

export interface Screen {
    ref: React.RefObject<HTMLDivElement>;
    slide: number;
}

export type ScreenList = Screen[];

function AppWrapper() {
    const { startX, diff, current, isFirstOpened } = useAppSelector((state) => state.slide);
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
        if (current === 1 && !isFirstOpened) dispatch(setFirstOpened());

        moveTo(screenList, current, diff);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, diff]);

    const onNextClick = () => {
        dispatch(setCurrent(1));
    };

    const onHomeClick = () => {
        dispatch(setCurrent(0));
    };

    const handleTouchStart = (e: any) => {
        if (e.target?.closest(".scroll")) setIsSwipe(false);
        else handleStart(e, screenList, dispatch);
    };

    const handleTouchMove = (e: React.TouchEvent<Element>) => {
        if (isSwipe) handleMove(e, dispatch, startX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        handleEnd(dispatch, screenList, diff, current);
        setIsSwipe(true);
    };

    const handleMouseDown = (e: any) => {
        setIsGrabbed(true);
        if (e.target.closest(".scroll")) setIsSwipe(false);
        handleStart(e, screenList, dispatch);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isGrabbed && isSwipe) {
            handleMove(e, dispatch, startX);
        }
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        setIsGrabbed(false);
        handleEnd(dispatch, screenList, diff, current);
        setIsSwipe(true);
    };

    const handlers = {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
    };

    return (
        <div className={["App", isGrabbed && "is-grabbed"].join(" ")} {...handlers}>
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
