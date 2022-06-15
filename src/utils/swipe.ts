import { AppDispatch } from "./../store/store";
import { ScreenList } from "../AppWrapper";
import { setCurrent, setDiff, setStartX } from "../store/slide/slideSlice";

// обработка движения мыши или касания
export const moveTo = (screenList: ScreenList, current: number, diff: number) => {
    if (current >= 0 && current <= 2) {
        // запрет на движение влево у первого слайда
        if (current === 0 && diff < 0) return;

        // запрет на движение вправо у последнего слайда
        if (current === 2 && diff > 0) return;

        // перемещение слайда
        changeScreenStyle(screenList, "transform", "", current, -diff);
    }
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
export const handleStart = (e: any, screenList: ScreenList, dispatch: AppDispatch) => {
    changeScreenStyle(screenList, "transition", "", 0, 0);

    const startX = e.touches ? e.touches[0].clientX : e.clientX;

    dispatch(setStartX(startX));
};

// обработка движения слайдов
export const handleMove = (e: any, dispatch: AppDispatch, startX: number) => {
    const endX = e.touches ? e.touches[0].clientX : e.clientX;

    dispatch(setDiff(startX - endX));
};

// обработка переключения слайдов
export const handleEnd = (dispatch: AppDispatch, screenList: ScreenList, diff: number, current: number) => {
    if (Math.abs(diff) > 0.3 * window.innerWidth && diff < 0 && current > 0) dispatch(setCurrent(current - 1));
    if (Math.abs(diff) > 0.3 * window.innerWidth && diff > 0 && current < 2) dispatch(setCurrent(current + 1));
    dispatch(setDiff(0));
    changeScreenStyle(screenList, "transition", "transform 0.3s", 0, 0);
};
