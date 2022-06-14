import React, { useEffect, useRef, useState } from "react";
import App from "./App";
import "./App.scss";
import { setFirstOpened } from "./store/slide/slideSlice";
import { useAppDispatch, useAppSelector } from "./store/store";
import { handleEnd, handleMove, handleStart } from "./utils/swipe";

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
    const { current, isFirstOpened } = useAppSelector((state) => state.slide);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current]);

    const handleTouchStart = (e: any) => {
        if (e.target?.closest(".scroll")) setIsSwipe(false);
        else handleStart(e, screenList);
    };

    const handleTouchMove = (e: React.TouchEvent<Element>) => {
        if (isSwipe) handleMove(e, screenList);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        handleEnd(e, screenList, dispatch);
        setIsSwipe(true);
    };

    const handleMouseDown = (e: any) => {
        setIsGrabbed(true);
        if (e.target.closest(".scroll")) setIsSwipe(false);
        handleStart(e, screenList);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isGrabbed && isSwipe) handleMove(e, screenList);
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        setIsGrabbed(false);
        handleEnd(e, screenList, dispatch);
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
            <App mainRef={mainRef} anounceRef={anounceRef} offerRef={offerRef} isFirstOpened={isFirstOpened} screenList={screenList} />
        </div>
    );
}

export default AppWrapper;