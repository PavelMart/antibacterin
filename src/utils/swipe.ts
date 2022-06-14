import { ScreenList } from "../AppWrapper";
import { setSlide } from "../store/slide/slideSlice";
import { AppDispatch } from "../store/store";

let startX: number;
let endX: number;
let current: number = 0;
let diff: number = 0;

// обработка движения мыши или касания
export const moveTo = (screenList: ScreenList, direction: "right" | "left", current: number, diff: number) => {
    if (direction === "right") diff = -diff;
    changeScreenStyle(screenList, "transform", "", current, diff);
};

const changeScreenStyle = (screenList: ScreenList, property: "transition" | "transform", value: string, current: number, diff: number) => {
    screenList.forEach(({ ref, slide }) => {
        if (ref?.current) {
            property === "transition"
                ? changeTransition(ref.current.style, value)
                : changeTransform(ref.current.style, slide, current, diff);
        }
    });
};

const changeTransition = (style: ElementCSSInlineStyle["style"], value: string) => {
    style.transition = value;
};

const changeTransform = (style: ElementCSSInlineStyle["style"], slide: number, current: number, diff: number) => {
    style.transform = `translateX(${window.innerWidth * (slide - current) + diff}px)`;
};

// обработка первого касания
export const handleStart = (e: any, screenList: ScreenList) => {
    changeScreenStyle(screenList, "transition", "", 0, 0);

    startX = e.touches ? e.touches[0].clientX : e.clientX;
};

// обработка движения слайдов
export const handleMove = (e: any, screenList: ScreenList) => {
    endX = e.touches ? e.touches[0].clientX : e.clientX;

    diff = Math.abs(startX - endX);

    if (startX < endX && current > 0) {
        moveTo(screenList, "left", current, diff);
    } else if (startX > endX && current < 2) {
        moveTo(screenList, "right", current, diff);
    }
};

// обработка переключения слайдов
export const handleEnd = (e: any, screenList: ScreenList, dispatch: AppDispatch) => {
    if (diff > 0.3 * window.innerWidth && startX < endX && current > 0) current--;
    if (diff > 0.3 * window.innerWidth && startX > endX && current < 2) current++;
    dispatch(setSlide(current));
    diff = 0;
    changeScreenStyle(screenList, "transition", "transform 0.3s", 0, 0);
    moveTo(screenList, "left", current, diff);
};
