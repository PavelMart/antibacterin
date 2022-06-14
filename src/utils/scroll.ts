let startY: number;
let endY: number;
let diffY: number = 0;
let currentPosition: number = 0;

export const onScrollStart = (e: any) => {
    startY = e.touches ? e.touches[0].clientY : e.clientY;
};

export const onScrollMove = (e: any, scrollText: React.RefObject<HTMLDivElement>) => {
    endY = e.touches ? e.touches[0].clientY : e.clientY;

    diffY = endY - startY;

    if (
        scrollText?.current &&
        currentPosition + diffY >= 0 &&
        currentPosition + diffY <= e.target.parentNode.clientHeight - e.target.clientHeight
    ) {
        const proportion = (scrollText.current.offsetHeight + e.target.offsetHeight) / e.target.parentNode.offsetParent.offsetHeight;
        e.target.style.transform = `translateY(${currentPosition + diffY}px)`;
        scrollText.current.style.transform = `translateY(-${(currentPosition + diffY) * proportion}px)`;
    }
};

export const onScrollEnd = () => {
    currentPosition = currentPosition + diffY;
    diffY = 0;
};
