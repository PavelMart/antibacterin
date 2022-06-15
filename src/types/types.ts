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

export interface MainPopupProps {
    isOpen: boolean;
}

export interface AppProps {
    mainRef: React.RefObject<HTMLDivElement>;
    anounceRef: React.RefObject<HTMLDivElement>;
    offerRef: React.RefObject<HTMLDivElement>;
    isFirstOpened: boolean;
    onNextClick: () => void;
    onHomeClick: () => void;
}

export interface HomeProps {
    onClick: () => void;
}

export interface MainProps {
    screenRef: React.RefObject<HTMLDivElement>;
    onClick: () => void;
}

export interface MainBodyProps {
    onClick: () => void;
}

export interface AnounceProps {
    screenRef: React.RefObject<HTMLDivElement>;
    isFirstOpened: boolean;
}

export interface OfferProps {
    screenRef: React.RefObject<HTMLDivElement>;
}

export interface OfferBodyProps {
    onClick: () => void;
    isOpen: boolean;
}

export interface OfferHeaderProps {
    title: string;
}

export interface OfferPopupProps {
    onClick: () => void;
}

export interface OfferAdvProps {
    onClick: () => void;
}

export interface IAdvantage {
    num: number;
    text: string;
}

export type Page = IAdvantage[];

export type Pages = Page[];

export interface AdvantageProps {
    advantage: IAdvantage;
}

export interface Handlers {
    onTouchStart: (e: any) => void;
    onTouchMove: (e: any) => void;
    onTouchEnd: () => void;
    onMouseDown: (e: any) => void;
    onMouseMove: (e: any) => void;
    onMouseUp: () => void;
}

export interface ScrollProps {
    scrollBody: React.RefObject<HTMLDivElement>;
    scrollText: React.RefObject<HTMLDivElement>;
    scrollThumb: React.RefObject<HTMLDivElement>;
    handlers: Handlers;
}

export interface ScrollTextProps {
    scrollText: React.RefObject<HTMLDivElement>;
}

export interface ButtonProps {
    text: string;
    icon: React.ReactNode;
    onClick?: () => void;
}
